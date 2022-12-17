import React from 'react'
import { Link } from 'react-router-dom'

const RightSignup = () => {
  return (
    <div className="signUp">
            <h2>Sign Up</h2>
            <div className="mobile">
                <small><b>Enter Mobile Number</b></small>
                <input type="number" placeholder='Mobile Number' />
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