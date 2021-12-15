import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/Pages/ErrorBoundary";

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <div>Initial App</div>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
