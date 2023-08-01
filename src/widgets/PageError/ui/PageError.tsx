import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";

interface PageErrorProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t("Произошла непредвиденная ошибка")}
      <Button>{t("Перезагрузить страницу")}</Button>
    </div>
  );
};
