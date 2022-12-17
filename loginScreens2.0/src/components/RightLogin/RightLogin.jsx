import React from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css'

const RightLogin = () => {
  return (
    <div className="signUp">
            <h2>Login</h2>
            <div>
              <p id='mob'>Mobile Number <span>+91 8432797912</span> <a href="#" id='change'>Change?</a></p>
            </div>
            <div className="mobile">
                <small><b>Enter OTP</b></small>
                <input type="number" placeholder='OTP' />
            </div>
            <p id='terms'>By continuing, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
            <div id="signUp">
                <button id='login-btn'>Login</button>
            </div>
            <div id='login'>
            <Link to="#">Login Using Password</Link>
            <div id="or">OR</div>
            <br />
            <p>New to Commence? <Link to="/">Create Account</Link> </p>
            </div>
    </div>
  )
}

export default RightLogin