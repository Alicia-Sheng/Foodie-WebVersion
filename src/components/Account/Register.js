import React from 'react';
import { Link } from "react-router-dom";
// import {RadioGroup, Radio} from 'react-radio-group';
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Register() {
  return (
    <section>
      <div className="block">
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
              {/* <RadioGroup name="user-type" row>
                <Radio value="provider" label="Food Provider" />
                <Radio value="customer" label="Customer" />
              </RadioGroup> */}
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block">Sign Up</button>
              </div>
            </form>
            <Link to="/account" className="link">Back to Account Page</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register;