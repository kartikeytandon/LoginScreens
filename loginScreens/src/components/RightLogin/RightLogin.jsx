import React from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css'

const RightLogin = () => {
  return (
    <div className="signUp">
            <h2>Login</h2>
            <div className="mobile">
                <small><b>Enter Mobile Number</b></small>
                <input type="number" placeholder='Mobile Number' />
                <small><b>Enter Password</b></small>
                <input type="password" placeholder='Your Password' />
            </div>
            <p id='terms'>By continuing, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
            <div id="signUp">
                <button id='login-btn'>Login</button>
                <p id='or'>OR</p>
                <button id='otp-btn'>Request OTP</button>
            </div>
            <div id='login'>
            <p>New to Commence? <Link to="/">Create Account</Link> </p>
            </div>
    </div>
  )
}

export default RightLogin