import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'counter',
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state, action) =>
    {
      console.log(state,action)
      state.counterVal++;
    },
    decrement: (state, action) =>
    {
      console.log(state,action)
      state.counterVal--;
    },
    addition: (state, action) =>
    {
      console.log(state,action)
      state.counterVal += Number(action.payload);
    },
    subtraction: (state, action) =>
    {
      console.log(state,action)
      state.counterVal -= Number(action.payload);
    }
  }
})

export const counterActions = counterSlice.actions;
export default counterSlice;