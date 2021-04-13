import { connect } from 'react-redux';
import * as CounterActionCreators from '../actions/createCounterActions';

function Counter (props) {
  const {
    step,
    count,
    incrementAction,
    decrementAction,
    setStepAction,
  } = props;

  const onChange = ({ target: { value } }) => setStepAction(Number(value));

  return (
    <div>
      <h1>Current counter value: {count}</h1>
      <input type='number' value={step} onChange={onChange} />
      <button onClick={decrementAction}>Decrement</button>
      <button onClick={incrementAction}>Increment</button>
    </div>
  );
}

const mapStateToProps = ({ count, step }) => ({ count, step });

const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch(CounterActionCreators.increment()),
  decrementAction: () => dispatch(CounterActionCreators.decrement()),
  setStepAction: newValue => dispatch(CounterActionCreators.setStep(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
