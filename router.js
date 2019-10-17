import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import history from './../history/history'
import {Login} from './../../container/index'
function AppRouter() {
    return (
        <div>
      <Router history = {history}>
          <Route exact path="/" exact component={Login} />
      </Router>
      </div>
    ); 
  }
  export default AppRouter;