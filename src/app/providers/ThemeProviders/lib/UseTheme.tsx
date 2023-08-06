import { useContext } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "app/providers/ThemeProviders/lib/ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const UseTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    toggleTheme,
    theme,
  };
};
