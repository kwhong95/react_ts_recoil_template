import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/Pages/ErrorBoundary";

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div>Initial App</div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
