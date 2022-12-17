import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RightLogin from '../RightLogin/RightLogin';
import RightSignup from '../RightSignup/RightSignup'
import './Login.css'

const Login = () => {
  let something = "Something for the platform"
  return (
    <div className="loginWin">
        <div className="leftWin">
            <div className="companyLogo"></div>
            <h3>{something}</h3>
        </div>
        <Router>
            <Routes>
                <Route path="/" element={<RightSignup />} />
                <Route path="/login" element={<RightLogin />} />
            </Routes>
        </Router>
    </div>
  )
}

export default Login