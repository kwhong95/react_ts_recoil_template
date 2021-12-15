import { ReactNode, Component, ErrorInfo } from "react";
import getQueryData from "../../utils/getQueryData";

type Props = {
  children: ReactNode;
};

type State = {
  error?: any;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: false,
  };

  static getDerivedStateFromError(e: Error): State {
    // Update state so the next render will show the fallback UI
    console.log(e);
    return { error: e };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaugth error:", error, errorInfo);
  }

  render() {
    if (this.state.error) {
      const { platform } = getQueryData();

      return <></>;
    }
  }
}

export default ErrorBoundary;
