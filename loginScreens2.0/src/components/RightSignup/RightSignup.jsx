import React from 'react'
import { Link } from 'react-router-dom'

const RightSignup = () => {
  return (
    <div className="signUp">
            <h2>Sign Up</h2>
            <div>
              <p id='mob'>Mobile Number <span>+91 8432797912</span> <a href="#" id='change'>Change?</a></p>
            </div>
            <div className="mobile">
                <small><b>Enter OTP</b></small>
                <input type="number" placeholder='Mobile Number' />
                <small><b>Enter Name</b></small>
                <input type="text" placeholder='Your Name' />
                <small><b>Enter Password</b></small>
                <input type="password" placeholder='Set Password' />
            </div>
            <div id="signUp">
                <button id='signup-btn'>Sign Up</button>
            </div>
            <div id='login'>
              <p>Already an Existing User? <Link to="/login">Login</Link> </p>
            </div>
    </div>
  )
}

export default RightSignup