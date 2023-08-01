import { UseTheme } from "app/providers/ThemeProviders/lib/UseTheme";
import { classNames } from "../shared/lib/classNames/classNames";

import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

import "./styles/index.scss";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";

export const App = () => {
  const { theme } = UseTheme();

  useEffect(() => {
    throw new Error();
  });

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
