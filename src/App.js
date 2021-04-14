import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

// import Home from './pages/Home';
const Home = lazy(() => import('./pages/Home'));
const Task = lazy(() => import('./pages/Task'));
const CounterPage = lazy(() => import('./pages/Counter'));

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
        
        <Suspense fallback={'App is Loadig....'}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/task' component={Task} />
            <Route path='/counter' component={CounterPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
