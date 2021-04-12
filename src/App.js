import { connect } from 'react-redux';
function App (props) {
  const { count, dispatch } = props;
  const decrement = () => {
    const action = { type: 'DECREMENT' };
    dispatch(action);
  };
  const increment = () => {
    const action = { type: 'INCREMENT' };
    dispatch(action);
  };
  return (
    <div>
      <h1>Current counter value: {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
function mapStateToProps (state) {
  /* Подписываемся на состояние */
  return state;
}
/* const withState = connect(mapStateToProps);
const componentWithState = withState(App);
export default componentWithState; */
export default connect(mapStateToProps)(App);
