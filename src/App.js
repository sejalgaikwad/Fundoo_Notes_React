import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../src/Pages/Login';
import Register from '../src/Pages/Register';
import ForgotPassword from '../src/Pages/ForgotPassword';
import ResetPassword from '../src/Pages/ResetPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/"  component={Login} exact></Route>
        <Switch>
          <Route path="/login" component={Login} ></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/forgotPassword" component={ForgotPassword}></Route>
          <Route path="/resetPassword" component={ResetPassword}></Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
