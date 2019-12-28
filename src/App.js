import React, { Component } from 'react';
import IndianHome from './components/Indian/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/Index/index';
import Navbar from './components/Utils/Navbar'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dosa: 0,
      Aapam: 0,
      Chapathi: 0,
      Idly: 0,
      Pongal: 0,
      Puri: 0,
      sidebar: 0
    };
  } 

  addOne = (element, value) => this.setState({[element]: value});
  minusOne = (element, value) => {
    if(value >= 0){
      this.setState({[element]: value})
    }
  };


  cartHandler = async () => {
    const   sideMover = value => new Promise((resolve, reject)=>{
      setTimeout(()=>{
        this.setState({sidebar: value});
        resolve();
      },10)
    })
    if(this.state.sidebar !==30){
      for(let i=0;i<=30;i++)
      {
          await sideMover(i);
      }
    }else if(this.state.sidebar !==0){
      for(let i=30;i>=0;i--)
      {
          await sideMover(i);
      }
    }
  }


  addCardHandler = (title, value) => this.setState({ [title]: value });
  render() {
    const { state } = this;
    return (
      <Router>
        <Navbar  value={this.state} cartHandler={this.cartHandler}/>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route
            exact
            path="/indian-food"
            component={() => (
              <IndianHome
                addCardHandler={this.addCardHandler}
                data={this.state}
                addOne = {this.addOne}
                minusOne = {this.minusOne}
                sidebar = {this.state.sidebar}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
