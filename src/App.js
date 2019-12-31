import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/LandingPage/Index';
import Home from './components/Home/Home';
import Navbar from './components/Utils/Navbar';
import Artist from './components/Artist/Artist';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    users: [{
      'E-mail': 'abc',
      'Password': 'abc'
    }],
    isAuthenticated: true,
    user: {
      'E-mail': 'Anto@codingmart.com',
      'password': 'abc@123'
    }
  }

  navChangeHandler = value => {
    value === 'login' ? this.setState({Login: true}) : this.setState({Login: false});
  }
  updateUserHandler = user =>  this.setState({users: [...this.state.users, user]});

  AuthUserHandler = ExistUser => this.setState({user: ExistUser, isAuthenticated: true});

  render() {
    const {users, isAuthenticated, user} = this.state;
    return (
      <div>
        <Router>
        <Navbar updateUserHandler={this.updateUserHandler} users={users} user={user} isAuthenticated={isAuthenticated} AuthUserHandler={this.AuthUserHandler}/>
          <Switch>
            <Route exact path="/" component={()=> <Index/>} />
            <Route exact path="/home" component={()=><Home />} />
            <Route exact path="/artist/:id" render={props => <Artist {...props} />}/>
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App; 