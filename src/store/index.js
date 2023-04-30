import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// 2
// Reducer function, will have 2 params, 'state' and 'action'.
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    // state.counter++
    // return{
    //   counter: state.counter
    // }
    // Do not mutate the existing state directly, it could lead to bug.
    //Should return new object value like below

    // ----------------------------

    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
    // return overall state object. Redux won't merge your changes with the existing state.
    // it replaces/overwrites the existing state with it.
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
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
