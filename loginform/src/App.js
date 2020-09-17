import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import HomeComponent from './home/home.component';
import LoginForm from './loginForm/loginForm.component';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginForm}></Route>
            <Route path="/home" component={HomeComponent}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
