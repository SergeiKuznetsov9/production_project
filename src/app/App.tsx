import { UseTheme } from "app/providers/ThemeProviders/lib/UseTheme";
import { classNames } from "../shared/lib/classNames/classNames";

import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

import "./styles/index.scss";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { theme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      {/* Этот саспенс необходим для подключения перевода */}
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
