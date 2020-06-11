import React from 'react'
import { Link } from "react-router-dom";

import './style.css'

const Account = () => {
  return (
    <section>
      <div className="block">
          <div className="title-wrapper text-center">
              <div className="title-inner">
                <h2 itemProp="headline">Account</h2>
              </div>
          </div>
          <div className="container">
              <Link to="/login" className="link">Jump to Login Page</Link>
              <br></br>
              <Link to="/register" className="link">Jump to Register Page</Link>
          </div>
      </div>
    </section>
  )
}

export default Account
