import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import LogIn from './components/pages/LogIn';
import UserPage from './components/pages/UserPage';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/login" component={ LogIn } />
            <Route exact path="/userpage" component={ UserPage } />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
