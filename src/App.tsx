import React from 'react';
import { Route, Switch } from 'wouter';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/results" component={ResultsPage} />
    </Switch>
  );
};

export default App;
