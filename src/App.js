import React from 'react';
import Counter from './components/Counter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div>
      <Counter />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
