import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
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
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* <LanguageSwicther /> */}
      </div>
    </div>
  );
};
