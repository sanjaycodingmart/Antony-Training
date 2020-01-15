import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Index from './components/LandingPage/Index';
import Home from './components/Home/Home';
import Navbar from './components/Utils/Navbar';
import Artist from './components/Artist/Artist';
import Favourite from './components/Favourites/Favourite';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subscribe from './components/Subscribe/Subscribe';
import Profile from './components/Profile/Profile';
import Existing from './components/ExistingUser/Existing';

class App extends Component {

  state = {
    users: [{
      'E-mail': 'anto@gmail.com',
      'phone': '999-888-777',
      'Password': 'abcd@1234',
      'languages': ['English'],
      'favourites': [],
      'subscribed': false
    }],
    isAuthenticated: false,
    user: undefined,
    sidebar: 0
  }

  async componentWillMount() {
    if(localStorage.getItem('token'))
    {
      // this.setState({isAuthenticated: true});
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('id');
      const response = await fetch('/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, token})
      });
      const {isAuth} =  await response.json();
      if(isAuth) {
        this.setState({isAuthenticated: true});
      }else{
        this.setState({isAuthenticated: false});
        localStorage.clear();
      }
    }else{
      this.setState({isAuthenticated: false});
      localStorage.clear();
    }
  }
  navChangeHandler = value => {
    value === 'login' ? this.setState({Login: true}) : this.setState({Login: false});
  }
  updateUserHandler = user =>  this.setState({users: [...this.state.users, user]});

  AuthUserHandler = async ExistUser => {
    await this.setState({isAuthenticated: true, user: ExistUser});
    try {
      localStorage.setItem('user', JSON.stringify(ExistUser));
      localStorage.setItem('songs',JSON.stringify([]));
      localStorage.setItem('subscribed', JSON.stringify(false));
      window.location.replace('/home');
    } catch (err) {
      console.log(err.message);
      console.log('yes')
    }
  
  }

  favouritesHandler = async (id, name, img, preview,duration) => {
    
    const song = {id,name, img,preview, duration};
    const existSongs = JSON.parse(localStorage.getItem('songs'));

    const updated = [...existSongs, song];
    localStorage.setItem('songs', JSON.stringify(updated));
    const data = {
      favourite: updated,
      email: localStorage.getItem('id')
    }
    console.log(updated)
    try {
        await fetch('/favourites',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
            
        });
    } catch (err) {
        console.log(err.message);
    }

  }

  render() {

    const {users, isAuthenticated, user} = this.state;
    // const user = localStorage.getItem('user');
    return (
        <Router>
        <Navbar updateUserHandler={this.updateUserHandler} users={users} user={user} isAuthenticated={isAuthenticated} AuthUserHandler={this.AuthUserHandler} newprops={this.props}/>
          <Switch>
            {
              isAuthenticated ? (
                <React.Fragment >
                  <Route exact path="/" component={()=>window.location.replace('/home')}/>
                  <Route exact path="/home" component={()=><Home user={user} favouritesHandler={this.favouritesHandler} />} />
                  <Route exact path="/artist/:id" render={props => <Artist {...props}  favouritesHandler={this.favouritesHandler}/>}/>
                  <Route exact path="/favourite" component={Favourite} />
                  <Route exact path="/profile" component={Profile}/>
                  <Route exact path="/subscribe" component={Subscribe}/>
                  <Route exact path="/exist" component={Existing}/>
                </React.Fragment>
              ) : <Route path="/" component={()=> <Index/>} />
            }
            
          </Switch>
        </Router>
    )
  }
}


export default App;  