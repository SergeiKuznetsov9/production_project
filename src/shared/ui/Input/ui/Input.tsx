import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";

// Эта конструкция записывает в тип HTMLInputProps все атрибуты, которые
// принимает input за исключением 'value' и 'onChange'. Другими словами Omit
// исключает из типа определенные поля
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = ({
  className,
  value,
  onChange,
  type = "text",
  placeholder,
  autofocus = false,
  ...otherProps
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("effect");
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (event: any) => {
    setCaretPosition(event?.target?.selectionStart || 0);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Эта штука работает и с функциями таким образом:
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          //   Это событие позволяет отслеживать что выбрано, где находится каретка и т.д.
          onSelect={onSelect}
          {...otherProps}
        ></input>
        {isFocused && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 8.85}px` }}
          />
        )}
      </div>
    </div>
  );
};
