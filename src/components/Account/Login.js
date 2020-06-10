import React from 'react'
import { Link } from "react-router-dom";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
  return (
    <section>
      <div className="block">
        <div className='container'>
          <div className='login-form'>
            <h1>Login</h1>
            <form>
              <div className="form-group">
                <input className="form-control" type="text" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" name="password" placeholder="password" />
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block">Login</button>
              </div>
            </form>
            <Link to="/account" className="link">Back to Account Page</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
