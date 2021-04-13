import React from 'react';
import { connect } from 'react-redux';
import * as TaskActionCreators from '../actions/createTaskActions';

const TaskList = props => {
  const { tasks, deleteTask } = props;
  return (
    <section>
      <h1>TASK LIST</h1>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2>ID: {task.id}</h2>
              <p>{task.body}</p>
              <input type='checkbox' value={task.isDone} />
            </div>
            <button onClick={() => deleteTask(task.id)}>Delete task</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  deleteTask: id => dispatch(TaskActionCreators.deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
