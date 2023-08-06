//2 Создание стора отдельной функцией имеет смысл, если нам нужно будет создавать стор не один раз,
// к примеру в целях тестирования

// Для создания стора используется метод configureStore. Он имеет дженерик тип, первый тип - это тип редьюсера
// Редьюсер создается из слайсов. Слайсы создаются в папке entities

import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
  });
}
