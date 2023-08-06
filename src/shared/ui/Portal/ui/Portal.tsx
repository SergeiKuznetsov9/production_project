// Порталы нужны для того, чтобы рендерить нейкий контент в любом, в каком только пожелаем
// HTML-елементе. Портал создается функцией createPortal(children, targetElement),
// где children - контент, который мы хотим телепортировать, а, targetElement = это элемент,
// в который мы хотим его телепортировать

// Тепер, то что мы будем порталить, нужно обернуть в этот элемент. Для примера мы работаем
// с модалкой

import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  targetElement?: HTMLElement;
}

export const Portal = ({
  children,
  targetElement = document.body,
}: PortalProps) => createPortal(children, targetElement);
