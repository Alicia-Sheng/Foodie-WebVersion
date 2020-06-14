import React from 'react'
import { Link } from "react-router-dom";
import Profile from "./Profile";

class Account extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fields: {
        "username" : "admin",
        "password" : "111111",
        "email" : "admin@brandeis.edu",
        "phone" : "1234567890",
        "orders":[
          {"id":"1234", "status":"Ready"},
          {"id":"2345", "status":"Picked up"}
        ]
      },
      errors: {}
    };
  }

  render(){
    return (
      <section>
        <div className="block">
            <div className="title-wrapper text-center">
                <div className="title-inner">
                  <h2 itemProp="headline">User Account</h2>
                </div>
            </div>
            <div className="container">
              <Profile profile={this.state.fields}/>
              <hr/>
              <Link to="/login" className="link">Jump to Login Page</Link>
              <br/>
              <Link to="/register" className="link">Jump to Register Page</Link>
            </div>
        </div>
      </section>
    )
  }
}

export default Account
