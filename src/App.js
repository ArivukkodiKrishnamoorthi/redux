import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignupForm from './components/auth/SignupForm';
import SigninForm from './components/auth/SigninForm';
import Logo from './components/images/logo.png'
import './App.css';

function App() {
  return (
    <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside "><h1 align="center"> MYAPP</h1>
          <img src={ Logo} class="center" alt="Logo" /> 
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignupForm}>
              </Route>
              <Route path="/sign-in" component={SigninForm}>
              </Route>
          </div>

        </div>
      </Router>
  );
}

export default App;
