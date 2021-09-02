import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Test from './Test';

function App() {
  
  return (
    <Router>
      <Link to="/"><button> Home</button></Link>
      <Link to="/test"><button> Test</button></Link>
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/test" component={Test}/>
      </Switch>
      
    </Router>
  )
}

export default App;

// TODO : CHECK REACTROUTERDOM, 