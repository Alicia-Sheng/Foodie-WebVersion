import React from 'react'
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    var value = target.value;
    this.setState({ [name]: value });
  }

  // Temporary function
  handleSubmit(event) {
    event.preventDefault();
    let obj = [];
    const username = this.state.username
    const password = this.state.password;
    let user = localStorage.getItem('user');
    // let history = useHistory();

    if (user) {
      // if user exist
      // compare locally stored value with input
      console.log('36')
      obj = JSON.parse(user)

      // let flag = obj.some(item => {
      //   if (item.username === username) return true // if username exists 
      // })
      let flag = false
      if (obj.username === username) {
        flag = true;
      }

      if (flag) {
        // check password if username exists
        // compare locally stored value with input

          flag = false;
          if (obj.username === username && obj.password === password) {
            flag = true;
          }
          
        if (flag) {// user logged in if user credentials verified
          alert('Wecome back, ' + username + "!")
          // history.push('/home')
        } else {
          alert('Wrong password!')
        }

      } else {// if username not found
        alert('Username not found, plese sign up!')
      }

    } else {
      // if user not found
      alert('User not found, plese sign up!')
    }
    // alert('Username: ' + this.state.username + ' Password: ' + this.state.password);
  }

  render() {
    return (
      <section>
        <div className="block">
          <div className='container'>
            <div className='login-form'>
              <h1>SIGN IN</h1>
              <br />
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
