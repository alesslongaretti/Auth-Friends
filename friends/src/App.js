import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
          
      <div className="App">
        <header className="header">
                
          <Link to="/login" className="links">Login</Link>
                  
          <Link to="/friends" className="links"> Friends List</Link>
        </header>
              
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
                  
          <Route path="/login" component={Login} />
                  
          <Route component={Login} />
                
        </Switch>
            
      </div>
          
    </Router>
  );
}

export default App;
