import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import Router from "./Router";
import GlobalStyles from "./style/GlobalStyles";
import { ApolloProvider } from "@apollo/client";
import client from "./services";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Router />
        <GlobalStyles />
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
