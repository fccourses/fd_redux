import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  task: taskReducer,
  counter: counterReducer,
});

export default rootReducer;
