import React from 'react'
import { Link } from "react-router-dom";

import './style.css'

const Account = () => {
  return (
    <div>
        <h1>This is the account page!</h1>
        <div>
            <Link to="/account/login" className="link">Jump to Login Page</Link>
            <br></br>
            <Link to="/account/register" className="link">Jump to Register Page</Link>
        </div>

    </div>
  )
}

export default Account
