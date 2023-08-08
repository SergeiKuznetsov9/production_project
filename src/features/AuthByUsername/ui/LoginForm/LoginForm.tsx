import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLogin } from "features/AuthByUsername/model/selectors/getLoginState";
import { loginByUsername } from "features/AuthByUsername";
import { Text } from "shared/ui/Text";
import { TextTheme } from "shared/ui/Text/ui/Text";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();
  const { username, password, error, isLoading } = useSelector(getLogin);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch, username, password]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch, username, password]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Введите userName")}
        autofocus={true}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Введите пароль")}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
};
