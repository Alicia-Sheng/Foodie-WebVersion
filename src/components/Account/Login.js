import React from 'react'
import { Link } from "react-router-dom";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    var value = target.value;
    this.setState({[name]: value});
  }

  // Temporary function
  handleSubmit(event){
    alert('Username: ' + this.state.username + ' Password: ' + this.state.password);
    event.preventDefault();
  }

  render(){
    return (
      <section>
        <div className="block">
          <div className='container'>
            <div className='login-form'>
              <h1>SIGN IN</h1>
              <br/>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input className="form-control" type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <input className="form-control" type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <button className="btn btn-lg btn-danger btn-block">SIGN IN</button>
                </div>
              </form>
              <Link to="/register" className="link">Not a member? Sign up now!</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
