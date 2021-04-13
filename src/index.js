import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/* 

  REDUX:
    store - хранилище. js object
    reducer - pure func; (state,action) => newState
    dispatch - function которая отправляет action в reducer
    action - events. { type: string, }
    
  REACT-REDUX:
    <Provider store={store} /> - read store
    connect(mStP, mDtP)() - HOC. subscribe component to store
    mapStateToProps - func, что именно из store взять
    mapDispatchToProps - func, которая передает func, которые dispatch экшены в пропсы
*/
