import { createSlice } from "@reduxjs/toolkit";
// "createSlice" is more powerful than "createReducer"

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // Every method here will automatically receive the latest state.
    increment(state) {
      state.counter++;
      // we are allowed to mutate the state.
      // Beacuse "createSlice" internally uses another package, called "Immer".
      // which will automatically clone the existing state,
      // create a new state object, keep all the state which we're not editing,
      // and override the state with we are editing in an immutable way.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// a slice of global state.
// When we have different pieces of state which are not directly related.
// such as "authentication status" and "counter status".
//*** to make our code maintainable.
// It must have 3 keys, "name", "initialState", and "reducers".

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
