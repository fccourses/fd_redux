import { connect } from 'react-redux';
import * as ActionCreators from './actions';

function App (props) {
  const { step, count, dispatch } = props;

  const decrement = () => {
    dispatch(ActionCreators.decrement());
  };
  const increment = () => {
    dispatch(ActionCreators.increment());
  };
  const onChange = ({ target: { value } }) => {
    dispatch(ActionCreators.setStep(Number(value)));
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
