import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input";

const MainPage = () => {
  const { t } = useTranslation("main");

  const [inputVal, setInputVal] = useState("");
  const inputHandler = (val: string) => {
    setInputVal(val);
  };

  return (
    <div>
      <Input
        onChange={inputHandler}
        value={inputVal}
        placeholder="Введите текст"
      />
      <div>{t("Главная страница")}</div>
    </div>
  );
};
export default MainPage;
