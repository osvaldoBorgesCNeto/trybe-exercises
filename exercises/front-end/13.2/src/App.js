import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Users from './Routes/Users';
import StrictAccess from './StrictAccess';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/" > Home </Link>
        <Link to="/about" > About </Link>
        <Link to="/users" > Users </Link>
        <Link to="/strict-access"> Strict Access </Link>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route 
            path="/users/:id"
            render={(props) => <Users {...props}      greetingMessage="Good Morning"/> }
          />
          <Route 
            path="/strict-access"
            render={ () => <StrictAccess user={{ username: 'osvaldo', password: '1234'}} /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
