import React from "react";
import './CSS/LoginSignup.css'

const LoginSignUp =() => {
    return (
        <div className="loginSignup">
            <div className="loginSignup-container">
                <h1>Sign up</h1>
                <div className="loginSignup-feilds">
                    <input type="text" placeholder="your name..." />
                    <input type="email" placeholder="your email..." />
                    <input type="password" placeholder="your password..." />
                </div>
                <button>Continue</button>
                <p className="loginSignup-login">
                    Already have an account ? <span>Login</span>
                </p>
                <div className="loginSignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>

                </div>
            </div>
        </div>
    )
}

export default LoginSignUp