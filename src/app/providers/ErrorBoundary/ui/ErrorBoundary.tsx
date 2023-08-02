import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { PageError } from "widgets/PageError";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}
export default ErrorBoundary;

//   Поскольку в классе нельзя использовать useTranslation, для использования переводов
// в классовом компоненте можно  применить HOC следующим образом:
//   export default withTranslation()(ErrorBoundary)
// Однако данный подход тут использоваться не будет, т.к. в качестве возвращаемого значения
// будет передан функциональный компонент, который будет содержать какую то информацию,
// которую можно перевести показанным способом
