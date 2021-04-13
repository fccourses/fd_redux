import React from 'react';
import Counter from './components/Counter';
import HeroForm from './components/HeroForm';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import HeroList from './components/HeroList';

const App = () => {
  return (
    <div>
      <Counter />

      <TaskForm />
      <TaskList />

      <HeroForm />
      <HeroList />
    </div>
  );
};

export default App;
