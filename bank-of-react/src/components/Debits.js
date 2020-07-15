import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debitName: '',
      debitAmount: '',
      debitDate: '',
    }
  }

  // makes obj that will be added to the list
  handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      description: this.state.debitName, 
      amount: Number(this.state.debitAmount),
      date: this.state.debitDate, 
    }
    this.props.addDebit(obj);
	console.log(obj)
  }

  // updates state object for each input
  handleInputChange = (event) => {
	event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // for displaying debit
  debitResults = () => {
    return (
      this.props.debitData.map((value,index) => 
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
            <h1 id='headers'>Debits</h1>
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
                <input name="debitName" type="text" value={this.state.debitName} onChange={this.handleInputChange}/>
                <label htmlFor="amount">Amount: </label>
                <input name="debitAmount" type="number" value={this.state.debitAmount} onChange={this.handleInputChange}/>
                <label htmlFor="data">Date: </label>
                <input name="debitDate" type="date" value={this.state.debitDate} onChange={this.handleInputChange}/>
				<button id="button">Submit</button>
              </div>
            </form>
          </div>
          <div>
            {this.debitResults()}
          </div>
        </div>
        </center>
      );
  }
}

export default Debits;
