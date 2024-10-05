import React from 'react';
import { Route, Switch } from 'wouter';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import ScholarshipForm from './pages/test';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/results" component={ResultsPage} />
      <Route path="test" component={ScholarshipForm} />
    </Switch>
  );
};

export default App;
