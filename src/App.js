import React from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          

          <Route path="/">
            <Header />
            <Home />
          </Route>


        </Switch>


      </Router>

    </div>
  );
}


export default App;
