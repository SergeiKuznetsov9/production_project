import { getCounter } from "./getCounter";
import { createSelector } from "@reduxjs/toolkit";

export const getCounterValue = createSelector(
  // этот метод принимает ужесозданный селектор, а также колбэк.
  // В колбэк попадет результат выполнения селектора
  // Большой плюс всего этого в мемоизации результата. Конкретно на этом примере, использовать
  // эту штуку не обязательно, т.к. не проводится никаких вычислений и мемоизация не нужна. Но
  // получение значения из стейта может сопровождаться какими-дибо вычислениями и тогда это бцудет полезно

  // кроме того можно больше добавить селекторов и тогда в колбэк будет отправлено несколько аргументов
  // в аналогичной последовательности
  getCounter,
  (counter) => counter.value
);