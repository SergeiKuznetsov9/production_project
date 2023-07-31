import { useTranslation } from "react-i18next";

const MainPage = () => {
  // В этот хук первым аргументом можно передать название файла перевода. По умолчанию
  // будет использован translation.
  // Это нужно для того, чтобы переводы подгружались лишь по необходимости
  const { t } = useTranslation("main");
  return (
    <div>
      <div>{t("Главная страница")}</div>
    </div>
  );
};
export default MainPage;
