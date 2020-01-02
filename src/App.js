import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/LandingPage/Index';
import Home from './components/Home/Home';
import Navbar from './components/Utils/Navbar';
import Artist from './components/Artist/Artist';
import Search from './components/Fetch/Search';
import Favourite from './components/Favourites/Favourite';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {

  state = {
    users: [{
      'E-mail': 'anto@gmail.com',
      'phone': '999-888-777',
      'Password': 'xxx',
      'languages': ['English'],
      'favourites': []
    }],
    isAuthenticated: false,
    user: {
      'E-mail': 'anto@gmail.com',
      'phone': '999-888-777',
      'Password': 'xxx',
      'languages': ['English'],
      
    },
    sidebar: 0
  }

  componentWillMount() {
    if(localStorage.getItem('user'))
    {
      this.setState({isAuthenticated: true});
      // window.location.replace('/home');
    }
  }
  navChangeHandler = value => {
    value === 'login' ? this.setState({Login: true}) : this.setState({Login: false});
  }
  updateUserHandler = user =>  this.setState({users: [...this.state.users, user]});

  AuthUserHandler = async ExistUser => {
    await this.setState({isAuthenticated: true});
    localStorage.setItem('user', JSON.stringify(ExistUser));
    localStorage.setItem('songs',JSON.stringify([]));
    window.location.replace('/home');
  }

  favouritesHandler = async (id, name, img, preview,duration) => {
    // this.setState({user.favourites: [...this.state.user.avourites, await Search(id, name)]});
    console.log(id, name, img, preview)
    const song = {id,name, img,preview, duration};
    // const song = await Search(id, name, img);
    const existSongs = JSON.parse(localStorage.getItem('songs'));

    const updated = [...existSongs, song];
    localStorage.setItem('songs', JSON.stringify(updated));

  }

  render() {

    const {users, isAuthenticated, user} = this.state;
    // const user = localStorage.getItem('user');
    return (
      <div>
        <Router>
        <Navbar updateUserHandler={this.updateUserHandler} users={users} user={user} isAuthenticated={isAuthenticated} AuthUserHandler={this.AuthUserHandler}/>
          <Switch>
            {
              isAuthenticated ? (
                <React.Fragment >
                  <Route exact path="/" component={()=>window.location.replace('/home')}/>
                  <Route exact path="/home" component={()=><Home user={user} favouritesHandler={this.favouritesHandler}/>} />
                  <Route exact path="/artist/:id" render={props => <Artist {...props}  favouritesHandler={this.favouritesHandler}/>}/>
                  <Route exact path="/favourite" component={Favourite} />
                </React.Fragment>
              ) : null
            }
            <Route path="/" component={()=> <Index/>} />
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App;  