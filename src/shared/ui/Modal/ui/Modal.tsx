import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { ReactNode, useEffect, useState } from "react";
import { Portal } from "shared/ui/Portal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
  lazy = true,
}: ModalProps) => {
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const closeHandler = () => {
    onClose();
    setIsMounted(false);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeHandler();
    }
  };

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  if (lazy && !isMounted) {
    return null;
  }

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
