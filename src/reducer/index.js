import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import heroReducer from './heroReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  task: taskReducer,
  counter: counterReducer,
  hero: heroReducer,
});

export default rootReducer;
