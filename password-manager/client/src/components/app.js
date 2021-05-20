import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bulma/css/bulma.min.css';

import PasswordList from './password-list';
import Home from './home';
import './app.css';

class App extends React.Component {


  render() {
    return (
      <Router>
        <div className="container">
        <div className="is-flex is-align-items-center is-justify-content-center my-4">
          <h1 className="logo-title is-size-1">PASSWORD MAN</h1>
          <img alt="flexing Arm" src="/img/strong.png" className="ml-4 logo-img"></img>
        </div>
          <Switch>
            <Route path='/password-list'>
              <PasswordList />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App