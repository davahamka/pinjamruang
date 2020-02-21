import React,{Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Admin from './pages/Admin';
import Login from './pages/Login';
import User from './pages/User';
import Info from './pages/user/Info'
import Notfound from './pages/Notfound';
import Activity from './pages/user/Activity';
import Gedung from './pages/user/Gedung';
import Formulir from './pages/user/Formulir';
import Activityall from './pages/user/Activityall'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />

          <Route exact path="/" render={props => <User {...props} />} />
          <Route exact path="/info" render={props => <Info {...props} />} />
          <Route exact path="/info/gedung" render={props => <Gedung {...props} />} />
          <Route exact path="/activity" render={props => <Activity {...props} />} />
          <Route exact path="/activity/all" render={props => <Activityall {...props} />} />
          <Route exact path="/form" render={props => <Formulir {...props} />} />


          <Route exact path="/admin" render={props => <Admin {...props} />} />

          <Route path="*" component={Notfound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
