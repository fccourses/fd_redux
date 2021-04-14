import React, { Suspense, lazy } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import Home from './pages/Home';
import Task from './pages/Task';
import CounterPage from './pages/Counter';

const App = props => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/task'>Task</NavLink>
          </li>
          <li>
            <NavLink to='/counter'>Counter</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/task' component={Task} />
          <Route path='/counter' component={CounterPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
