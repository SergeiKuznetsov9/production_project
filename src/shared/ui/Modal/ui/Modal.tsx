import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { ReactNode, useEffect } from "react";
import { Portal } from "shared/ui/Portal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  const closeHandler = () => {
    onClose();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeHandler();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <div
        className={classNames(cls.Modal, mods, [className])}
        onClick={closeHandler}
      >
        <div className={cls.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
