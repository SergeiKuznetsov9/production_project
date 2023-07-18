import { Link } from "react-router-dom";

import { UseTheme } from "app/providers/ThemeProviders/lib/UseTheme";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";
import { classNames } from "../shared/lib/classNames/classNames";

export const App = () => {
  const { toggleTheme, theme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Изменить тему</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
};
