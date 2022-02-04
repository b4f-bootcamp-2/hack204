const { connectToMongo, getMongoCollection, insertUser, findUserByUsername, insertSession, findSessionByToken } = require('./db')
const express = require("express");
const app = express()
const port = process.env.PORT ?? 5000

app.use(express.json())

app.post("/signup", async (req, res) => {
    const errors = await validateUser(req.body)
    console.log(errors)
    if (Object.keys(errors).length === 0) {
        const { passwordConfirmation, ...username } = req.body
        const id = await insertUser(username)
        res.status(201).json({
            "message": "User created.",
            _id: id
        })
        return
    }
    res.status(400).json({
        message: "The data is not valid.",
        errors
    })
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body
    const id = await findUserByUsername(username)
    if (!id || id.password !== password)
        return res
            .status(404)
            .json({ errors: { username: "Incorrect username and password combination." } })

    const token = await insertSession({ username: username })
    res.status(200).json({ token })
})

app.get("/username", async (req, res) => {
    const token = req.header("authorization")
    console.log(token)
    if (token === undefined)
        return res
            .status(401)
            .json({ message: "The authentication token has not been sent." })

    const session = await findSessionByToken(token)
    if (!session)
        return res
            .status(403)
            .json({ message: "There isn't a session with the selected token." })

    const user = await findUserByUsername(session.username)
    delete user.password

    res.status(200).json(user)
})

app.listen(port, () => console.log(`À escuta em http://localhost:${port}`))


async function validateUser(data) {
    const errors = {}
    if (data.username === undefined || data.username.length === 0) {
        errors.username = "Please insert your username."
    } else if (!checkUsernameStrength(data.username)) {
        errors.username = "Please insert a valid username."
    } else if (Boolean(await findUserByUsername(data.username))) {
        errors.username = "The username is already being used."
    }

    return errors
}

function checkUsernameStrength(username) {
    if (username.length < 5) return 0;
    return true
}

function checkPasswordStrength(password) {
    if (password.length < 9) return 0;
    const regexes = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
    ]
    return regexes
        .map(re => re.test(password))
        .reduce((score, t) => t ? score + 1 : score, 0)
}