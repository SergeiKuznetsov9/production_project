import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { UseTheme } from "app/providers/ThemeProviders";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { Theme } from "app/providers/ThemeProviders/lib/ThemeContext";
import { Button, ThemeButton } from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = UseTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? (
        <LightIcon width={"40px"} height={"40px"} />
      ) : (
        <DarkIcon width={"40px"} height={"40px"} />
      )}
    </Button>
  );
};
