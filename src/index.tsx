import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import Router from "./Router";
import GlobalStyles from "./style/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
      <GlobalStyles />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
