import React, {useState} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
// import {RadioGroup, Radio} from 'react-radio-group';
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css'

var data = []

const Register = () => {

  const [users, updateUsers] = useState(data)
  const [username, setName] = useState("")
  const [password, setPassword] = useState("")

  // this is the action when the submit button is pushed
  const addUser = (event) => {
    event.preventDefault()
    const user = {id:users.length, username:username, password:password}
    updateUsers(users.concat(user))
  }

  // these are called when the form elements are modified
  const updateName = event => setName(event.target.value)
  const updatePassword = event => setPassword(event.target.value)

  return (
    <>
    <section>
      <div className="block">
        <div className='container'>
          <div className='login-form'>
            <h1>Create an account</h1>
            <form onSubmit={addUser}>
              <div className="form-group">
                <input className="form-control" type="text" name="username" placeholder="username"  onChange={updateName}/>
              </div>
              <div className="form-group">
                <input className="form-control" type="password" name="password" placeholder="password"  onChange={updatePassword}/>
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

    <h3> User List </h3>
    <h4> ***Temporary function*** </h4>
    <ul>
       {users.map(user => (
         <li key={user.id}>
           {user.id} - {user.username} : {user.password}
         </li>
       ))}
     </ul>
    </>
  )
}

Register.propTypes = {
  data: PropTypes.array.isRequired
}

export default Register;