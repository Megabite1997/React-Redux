import { createStore } from "redux";

// 2
// Reducer function, will have 2 params, 'state' and 'action'.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// 1
const store = createStore(counterReducer);
// Store needs to know which 'reducer' is responsible for changing the Store.
// run the reducer first initialization in this argument.

// 3
// Subscription
const counterSubscriber = () => {
  const latestState = store.getState(); // Get the latest store.
  console.log(latestState);
};

// 4
store.subscribe(counterSubscriber); // Run a function when the data in the store changes.

// 5
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
// run the reducer function.

export default store;
