import React from 'react';
import { Link } from "react-router-dom";
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Register() {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='login-form'>
          <h1>Create an account</h1>
          <form>
            <div className="form-group">
              <input className="form-control" type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <input className="form-control" type="password" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <button className="btn btn-lg btn-primary btn-block">Sign Up</button>
            </div>
          </form>
          <Link to="/account" className="link">Back to Account Page</Link>
        </div>
      </div>
    </div>
  )
}

export default Register;