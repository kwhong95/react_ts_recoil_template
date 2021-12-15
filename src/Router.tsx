import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/Pages/ErrorBoundary";

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>Initial App</ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
