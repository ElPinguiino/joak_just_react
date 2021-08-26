import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import PlaceOrder from './pages/placeorder';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/placeorder" component={PlaceOrder} exact />
      </Switch>
    </Router>
  );
}

export default App;
