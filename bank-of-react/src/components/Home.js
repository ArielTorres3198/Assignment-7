import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Style.css';

class Home extends Component {
  render() {
    return (
        <div>
          <center>
            <h1 id='headers'>Bank of React</h1>
            <img src="http://pngimg.com/uploads/bank/bank_PNG24.png" alt="bank" width="100px"/>
            <div id='headers2'>
 		      <Link id='button' to="/">Home</Link> 
              <Link id='button' to="/userProfile">User Profile</Link> 
		      <Link id='button' to="/LogIn">Login</Link> 
		      <Link id='button' to="/Debits">Debits</Link> 
		      <Link id='button' to="/Credits">Credits</Link>
            </div>
          </center>
        </div>
    );
  }
}

export default Home;
