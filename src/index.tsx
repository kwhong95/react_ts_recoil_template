import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import Router from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
