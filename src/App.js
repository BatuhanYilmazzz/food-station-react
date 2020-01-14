import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import RecipeItem from './components/RecipeItem';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/recipe/:title' component={RecipeItem} />
      </Switch>
    </Router>
  );
};

export default App;
