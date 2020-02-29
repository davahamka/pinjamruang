import React,{Component} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Admin from './pages/Admin';
import Order from './pages/admin/Order';
import Login from './pages/Login';
import User from './pages/User';
import Info from './pages/user/Info'
import Notfound from './pages/Notfound';
import Activity from './pages/user/Activity';
import Gedung from './pages/user/Gedung';
import Formulir from './pages/user/Formulir';
import Activityall from './pages/user/Activityall'
import GedungAdmin from './pages/admin/Gedung'
import Orderdone from './pages/admin/Orderdone'
import Orderall from './pages/admin/Orderall.js'

import FormulirFinish from './pages/user/FormulirFinish';

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
          {/* <Route exact path="/info/gedung/:handle" component={Gedungoy} /> */}
          <Route exact path="/activity" render={props => <Activity {...props} />} />
          <Route exact path="/activity/all" render={props => <Activityall {...props} />} />
          <Route exact path="/form" render={props => <Formulir {...props} />} />WW
          <Route exact path="/form/finish" render={props => <FormulirFinish {...props} />} />


          <Route exact path="/admin" render={props => <Admin {...props} />} />
          <Route exact path="/admin/order" render={props => <Order {...props} />} />
          <Route exact path="/admin/order/done" render={props => <Orderdone {...props} />} />
          <Route exact path="/admin/order/all" render={props => <Orderall {...props} />} />
          <Route exact path="/admin/gedung" render={props => <GedungAdmin {...props} />} />

          <Route path="*" component={Notfound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
