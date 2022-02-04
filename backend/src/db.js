const { MongoClient, ObjectId } = require('mongodb')
const URL = process.env.MONGO_URL ?? "mongodb://127.0.0.1:27017"
const DATABASE_NAME = "books"
const USER_COLLECTION = "users"
const SESSION_COLLECTION = "sessions"

let client

async function connectToMongo() {
    try {
        if (!client) {
            client = await MongoClient.connect(URL)
        }
        return client;
    } catch (err) {
        console.log(err)
    }
}

async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
}

async function insertUser(user) {
    const collection = await getMongoCollection(DATABASE_NAME, USER_COLLECTION)
    const res = await collection.insertOne(user)
    return res.insertedId
}

async function findUserByUsername(username) {
    const collection = await getMongoCollection(DATABASE_NAME, USER_COLLECTION)
    const user = await collection.findOne({ username })
    return user
}

async function insertSession(session) {
    const collection = await getMongoCollection(DATABASE_NAME, SESSION_COLLECTION)
    const res = await collection.insertOne(session)
    return res.insertedId
}

async function findSessionByToken(token) {
    if (!ObjectId.isValid(token)) return undefined
    const collection = await getMongoCollection(DATABASE_NAME, SESSION_COLLECTION)
    const session = await collection.findOne({ _id: new ObjectId(token) })
    return session
}

module.exports = { connectToMongo, getMongoCollection, insertUser, findUserByUsername, insertSession, findSessionByToken }