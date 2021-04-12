import { connect } from 'react-redux';
import { setStep, increment, decrement } from './actions';

function App (props) {
  const { step, count, dispatch } = props;

  const decrement = () => {
    const action = increment();
    dispatch(action);
  };

  const increment = () => {
    const action = decrement();
    dispatch(action);
  };

  const onChange = event => {
    // const action = {
    //   type: ACTION_TYPES.SET_STEP,
    //   newStep: Number(event.target.value),
    // };
    const value = Number(event.target.value);
    const action = setStep(value);
    dispatch(action);
  };

  return (
    <div>
      <h1>Current counter value: {count}</h1>
      <input type='number' value={step} onChange={onChange} />
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
function mapStateToProps (state) {
  /* Подписываемся на состояние */
  return state;
}

export default connect(mapStateToProps)(App);
