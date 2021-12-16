import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/Pages/ErrorBoundary";
import { pages } from "./components/Pages";
import { Navigation } from "./components/Molecules";

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Navigation />
          <Routes>
            {pages.map((page, idx) => (
              <Route key={idx} path={page.path} element={page.element} />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
