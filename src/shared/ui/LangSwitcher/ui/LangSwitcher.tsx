import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t(short ? "Кортокий язык" : "Язык")}
    </Button>
  );
};
