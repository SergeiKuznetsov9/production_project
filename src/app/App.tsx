import { UseTheme } from "app/providers/ThemeProviders/lib/UseTheme";
import { classNames } from "../shared/lib/classNames/classNames";

import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

import "./styles/index.scss";

export const App = () => {
  const { toggleTheme, theme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Изменить тему</button>
      <AppRouter />
    </div>
  );
};
