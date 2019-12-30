import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/LandingPage/Index';
import Navbar from './components/Utils/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    users: []
  }

  navChangeHandler = value => {
    value === 'login' ? this.setState({Login: true}) : this.setState({Login: false});
  }
  updateUserHandler = user =>  this.setState({users: [...this.state.users, user]});

  render() {
    const {users} = this.state;
    return (
      <div>
        <Router>
        <Navbar updateUserHandler={this.updateUserHandler} users={users}/>
          <Switch>
            <Route exact="/" component={()=> <Index/>} />
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App; 