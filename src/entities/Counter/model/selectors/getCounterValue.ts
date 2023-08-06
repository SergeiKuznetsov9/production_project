import { getCounter } from "./getCounter";
import { createSelector } from "@reduxjs/toolkit";

export const getCounterValue = createSelector(
  getCounter,
  (counter) => counter.value
);
