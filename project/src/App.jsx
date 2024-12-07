import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HobbyHub from './components/HobbyHub';
import MentalHealth from './components/MentalHealth';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/hobbyhub" component={HobbyHub} />
        <Route path="/mentalhealth" component={MentalHealth} />
        <Route path="/" exact>
          <div className="home">
            <h1 className="text-center text-4xl font-bold">Welcome to the Hub</h1>
            <p className="text-center text-xl">Select a section to explore.</p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
