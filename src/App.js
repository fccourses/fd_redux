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

const prev = {
  tasks: [
    {
      id: 0,
      body: 'test task',
      isDone: false,
    },
  ],
  count: 0,
  step: 1,
};

const now = {
  task: {
    tasks: [
      {
        id: 0,
        body: 'test task',
        isDone: false,
      },
    ],
  },
  counter: {
    count: 0,
    step: 1,
  },
};

export default App;
