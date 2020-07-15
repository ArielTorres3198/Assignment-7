import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Style.css';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <center>
            <h1 id='headers'>User Profile</h1>
            <div id='headers2'>
		      <Link id='button' to="/">Home</Link>
              <Link id='button' to="/userProfile">User Profile</Link>
	  	      <Link id='button' to="/LogIn">Login</Link>
		      <Link id='button' to="/Debits">Debits</Link>
		      <Link id='button' to="/Credits">Credits</Link>
            </div>
            <div id='box'>
              <div>Username: {this.props.userName}</div>
              <div>Member Since: {this.props.memberSince}</div>
            </div>
          </center>
        </div>
    );
  }
}

export default UserProfile;
