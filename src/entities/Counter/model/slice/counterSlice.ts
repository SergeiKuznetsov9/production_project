//3 Создается один из слайсов. Он экспортирует actions и reducer, которые тут же переименовываются
// каждый из таких редьюсеров прокидывается в функцию создания стора
// тут же типизироуется стэйт этого слайса

import { createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../types/counterSchema";

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: counterActions, reducer: counterReducer } =
  counterSlice;
