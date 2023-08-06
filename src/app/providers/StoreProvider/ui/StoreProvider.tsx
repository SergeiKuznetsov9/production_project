//1 Начинаем с того, что создаем обертку для приложения
// Тут же создается стор, куда прокидывается initialState
// При этом, стор создается в конфиге, рядышком.
// Рядом с конфигом также типизируем глобальный стор

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../";
import { StateSchema } from "../config/StateSchema";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = ({
  children,
  initialState,
}: StoreProviderProps) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
