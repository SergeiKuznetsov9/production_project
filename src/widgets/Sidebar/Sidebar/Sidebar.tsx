import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";

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
      <Button
        onClick={onToggle}
        className={cls.colapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square={true}
        size={ButtonSize.L}
      >
        {colapsed ? ">" : "<"}
      </Button>

      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.link}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.linkLabel}>{t("Главная")}</span>
        </AppLink>

        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.link}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.linkLabel}>{t("О сайте")}</span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={colapsed} className={cls.lang} />
      </div>
    </div>
  );
};
