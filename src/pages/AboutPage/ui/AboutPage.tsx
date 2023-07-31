import { useTranslation } from "react-i18next";

const AboutPage = () => {
  // В этот хук первым аргументом можно передать название файла перевода. По умолчанию
  // будет использован translation
  // Это нужно для того, чтобы переводы подгружались лишь по необходимости

  const { t } = useTranslation("about");

  return <div>{t("О сайте")}</div>;
};

export default AboutPage;
