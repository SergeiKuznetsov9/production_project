import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [colapsed, setColapsed] = useState(false);

  const onToggle = () => {
    setColapsed((isColapsed) => !isColapsed);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.colapsed]: colapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>{t("Переключить")}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
