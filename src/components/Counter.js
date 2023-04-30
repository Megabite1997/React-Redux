import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index2";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  // pass a function to "useSelector"
  // A function determines which piece of data we want to extract from our store.
  // A fucntion which receives the state managed by Redux
  // when use 'useSelector', 'react-redux' will automatically set up a subscription to the redux store for this component.
  // when ever data changes, this component will be re-excecuted.

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(5)); // return {type: SOME_UMIQUE_IDENTIFIER, payload: 5}
  };
  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
