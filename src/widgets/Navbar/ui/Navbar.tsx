import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        onClick={onToggleModal}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {t("Войти")}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, ab aliquam
        veritatis molestias, illo exercitationem, unde facere facilis cumque
        quisquam error expedita libero nam sint dignissimos vero distinctio
        iusto adipisci?
      </Modal>
    </div>
  );
};
