import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditName: '',
      creditAmount: '',
      creditDate: '',
    }
  }

  // makes obj that will be added to the list
  handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      description: this.state.creditName, 
      amount: Number(this.state.creditAmount),
      date: this.state.creditDate, 
    }
    this.props.addCredit(obj);
	console.log(obj)
  }

  // updates state object for each input
  handleInputChange = (event) => {
	event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // for displaying credit
  creditResults = () => {
    return (
      this.props.creditData.map((value,index) => 
        <div>
		  { value.description } { value.amount } { value.date }
        </div>)
    )
  } 

  render() {
      return (
        <center>
        <div>
          <div>
            <h1 id='headers'>Credits</h1>
          </div>
          <div id='headers2'>
            <Link id='button' to="/">Home</Link>
            <Link id='button' to="/userProfile">User Profile</Link>
            <Link id='button' to="/LogIn">Login</Link>
            <Link id='button' to="/Debits">Debits</Link>
            <Link id='button' to="/Credits">Credits</Link>
          </div>
          <div id='box'>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="description">Description: </label>
                <input name="creditName" type="text" value={this.state.creditName} onChange={this.handleInputChange}/>
                <label htmlFor="amount">Amount: </label>
                <input name="creditAmount" type="number" value={this.state.creditAmount} onChange={this.handleInputChange}/>
                <label htmlFor="data">Date: </label>
                <input name="creditDate" type="date" value={this.state.creditDate} onChange={this.handleInputChange}/>
				<button id="button">Submit</button>
              </div>
            </form>
          </div>
          <div>
            {this.creditResults()}
          </div>
        </div>
        </center>
      );
  }
}

export default Credits;
