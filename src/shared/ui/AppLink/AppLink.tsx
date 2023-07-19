// Этот компонент напишем таким образом, что у него будут разные стили
// под разные темы

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

// создадим enum для содержания списка возможных тем
export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

// LinkProps - стандартный тип под пропсы ссылки
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

// Обратить внимание на ...otherProps - отличный способ передавать
// другие пропсы

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      // Стили класса AppLink определеяем в этом компоненте и передаем их в Link
      // Линк теперь универсальный и стилизцется из родителя
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
