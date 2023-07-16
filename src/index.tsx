import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ThemeProvider } from "./theme/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // BrowserRouter - обертка для того, чтобы работал роутинг
  <BrowserRouter>
    {/* Обертка контекста темы */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
