import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

// Questions
// 1) How to make our store aware of this slice?
// 2) How to dispatch "actions" against this slice?

//  Answer 1)
const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

// Answer 2)
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
