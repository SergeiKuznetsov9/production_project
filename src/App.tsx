import { Route, Routes, Link } from "react-router-dom";
import { Suspense } from "react";

import { UseTheme } from "./theme/UseTheme";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

import "./styles/index.scss";
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {
  // Кастомный хук предоставляющий логику по смене темной и светлой тем
  const { toggleTheme, theme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Изменить тему</button>
      {/* Для перехода по маршрутам обозначим ссылки */}
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      {/* Эта обертка необходима поскольку мы используем lazyLoading компоненты и
          в нее передается верстка, которая будет отражаться во время загрузки */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Routes - в случае определения маршрутов, их нужно обернуть в Routes */}
        <Routes>
          {/* Определеяем маршруты */}
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
