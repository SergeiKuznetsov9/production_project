// данный код говорит о том, что файлы с расширением .scss нужно воспринимать как модули
// Без этого css модули работать не будут, т.к. при импорте они будут рассматриваться
// как обычно импортируемый фалйы

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
