import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import AccountBalance from './components/AccountBalance';
import Debits from './components/Debits';
import Credits from './components/Credits';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debitData: [],
      creditData: [],
      debitTotal: 0,
      creditTotal: 0,
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  // gets data from the urls
  componentDidMount() {
    const creditURL = "https://moj-api.herokuapp.com/credits";
    const debitURL = "https://moj-api.herokuapp.com/debits";
	
    axios.get(creditURL)
    .then(response => {
      const creditData = response.data;
      this.setState({ creditData });
    })
    .catch(error => {
      console.log(error);
      this.setState({ creditData: [] });
    })

    .then(() => axios.get(debitURL)
      .then(response => {
        const debitData = response.data;
        this.setState({ debitData })
      }))
      .catch(error => {
        console.log(error);
        this.setState({ debitData: [] });
      })
		  
    .then(() => this.calculateBalance());
  }

  // adds new debit obj to list
  addDebit = (event) => {
    const debitData = this.state.debitData;

    debitData.push(event);
    this.setState({debitData: this.state.debitData});
    this.calculateBalance();
  }

  // adds new credit obj to list
  addCredit = (event) => {
    const creditData = this.state.creditData;

    creditData.push(event);
    this.setState({creditData: creditData});
    this.calculateBalance();
  }

  // goes through arrays and gets the credit sum and debit sum
  // then subtracts debit from credit to get the new balance
  calculateBalance() {
	let creditResult = this.state.creditData.map(({ amount }) => amount)
	let creditSum = creditResult.reduce(function(a, b){
        return a + b;
    }, 0);
	console.log(creditSum);

	let debitResult = this.state.debitData.map(({ amount }) => amount)
	let debitSum = debitResult.reduce(function(a, b){
        return a + b;
    }, 0);
	console.log(debitSum);

    let totalBalance = creditSum - debitSum;
	console.log(totalBalance);

    this.setState({ accountBalance: totalBalance.toFixed(2) });
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
    );
    const LogInComponent = () => (
        <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>
	);
    const DebitsComponent = () => (
        <Debits debitData={this.state.debitData} debitTotal={this.state.debitTotal} addDebit={this.addDebit}/>
	);
    const CreditsComponent = () => (
        <Credits creditData={this.state.creditData} creditTotal={this.state.creditTotal} addCredit={this.addCredit}/>
	);

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
			<Route exact path="/LogIn" render={LogInComponent}/>
			<Route exact path="/Debits" render={DebitsComponent}/>
			<Route exact path="/Credits" render={CreditsComponent}/>
          </div>
		  <center>
		  <h2><AccountBalance accountBalance={this.state.accountBalance}/></h2>
          </center>
        </Router>
    );
  }

}

export default App;
