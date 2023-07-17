import { Route, Routes, Link } from "react-router-dom";
import { Suspense } from "react";

import { UseTheme } from "app/providers/ThemeProviders/lib/UseTheme";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

import "./styles/index.scss";
import { classNames } from "../shared/lib/classNames/classNames";

export const App = () => {
  const { toggleTheme, theme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Изменить тему</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
