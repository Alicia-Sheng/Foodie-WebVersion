import React from 'react';
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    // Name
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Username cannot be empty";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z0-9]+$/)) {
        formIsValid = false;
        errors["username"] = "Username can only include letters and numbers";
      }
    }

    // Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        fields["email"].indexOf('@@') == -1 &&
        lastDotPos > 2 &&
        (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    // Phone number
    if(!fields["phone"]){
      formIsValid = false;
      errors["phone"] = "Phone number cannot be empty";
    }

    if(typeof fields["phone"] !== "undefined"){
      if (!fields["phone"].match(/^[0-9]+$/) || fields["phone"].length !== 10) {
        formIsValid = false;
        errors["phone"] = "Phone number is not valid";
      }
    }

    // Password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password cannot be empty";
    }

    if (typeof fields["password"] !== "undefined") {
      if (fields["password"].length > 15) {
        formIsValid = false;
        errors["password"] = "Password is too long (should be in 6-15 characters)";
      } else if (fields["password"].length < 6) {
        formIsValid = false;
        errors["password"] = "Password is too short (should be in 6-15 characters)";
      }
    }

    if (fields["password"] !== fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "Password don't match";
    }

    // User Type
    if (!fields["userType"]) {
      formIsValid = false;
      errors["userType"] = "Please choose one from above";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleSubmit(e) {
    e.preventDefault();
    // let history = useHistory();
    if (this.handleValidation()) {
      const username = this.users.value;
      const password = this.password.value;
      let user = localStorage.getItem('user');
      if (user) {
        // if user exists
        alert("User already exists, please sign in!");
      } else {
        // if user not exists
        alert("Successfully registered as a " + this.state.fields["userType"] + "!");
        localStorage.setItem('user', JSON.stringify({
          username,
          password
        }))
        // history.push('/home')
      }
    } else {
      alert("Form has errors.")
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <section>
        <div className="block">
          <div className='container'>
            <div className='login-form'>
              <h1>CREATE AN ACCOUNT</h1>
              <br />
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <input className="form-control" type="text" name="username" value={this.state.fields["username"]} placeholder="username" onChange={this.handleChange.bind(this, "username")} />
                  <span style={{ color: "red" }}>{this.state.errors["username"]}</span>
                </div>
                <div className="form-group">
                  <input className="form-control" type="text" name="email" value={this.state.fields["email"]} placeholder="email" onChange={this.handleChange.bind(this, "email")} />
                  <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                </div>
                <div className="form-group">
                  <input className="form-control" type="text" name="phone" value={this.state.fields["phone"]} placeholder="phone number" onChange={this.handleChange.bind(this, "phone")} />
                  <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                </div>
                <div className="form-group">
                  <input className="form-control" type="password" name="password" value={this.state.fields["password"]} placeholder="password" onChange={this.handleChange.bind(this, "password")} />
                  <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                </div>
                <div className="form-group">
                  <input className="form-control" type="password" name="confirmPassword" value={this.state.fields["confirmPassword"]} placeholder="confirm password" onChange={this.handleChange.bind(this, "confirmPassword")} />
                  <span style={{ color: "red" }}>{this.state.errors["confirmPassword"]}</span>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <span style={{ display: 'inline-block', width: '50%' }}>
                      <label>
                        <input type="radio" name="userType" value="customer" checked={this.state.fields["userType"] === "customer"} className="form-check-input" onChange={this.handleChange.bind(this, "userType")} />
                        Customer
                      </label>
                    </span>
                    <span style={{ display: 'inline-block', width: '50%' }}>
                      <label>
                        <input type="radio" name="userType" value="provider" checked={this.state.fields["userType"] === "provider"} className="form-check-input" onChange={this.handleChange.bind(this, "userType")} />
                        Food Provider
                      </label>
                    </span>
                  </div>
                  <span style={{ color: "red" }}>{this.state.errors["userType"]}</span>
                </div>
                <div className="form-group">
                  <button className="btn btn-lg btn-danger btn-block">SIGN UP</button>
                </div>
              </form>
              <Link to="/login" className="link">Already have an account? Sign in now!</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register
