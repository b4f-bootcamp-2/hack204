import { SignUp } from "./Signup";
import { Login } from "./Login";

export function Start() {
    return (
        <div>
            <h1 className="titlestart">Welcome</h1>
            <div className="container">    
            </div>
                <div className="login">
                    <div className="headerlogin">
                        <p>Already have an account?</p>
                        <h2>Login</h2>
                    </div>
                    <Login onSubmit={async function checkLogin(fields) {
                        const res = await fetch('/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(
                                fields
                            )
                        })
                        const responseJson = await res.json();
                        return responseJson
                    }} />
                </div>
            </div>
    );
}

export default Start;