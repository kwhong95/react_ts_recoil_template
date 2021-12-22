import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import Router from "./Router";
import GlobalStyles from "./style/GlobalStyles";
import theme from "./style/theme";
import { ThemeProvider } from "./style/themed-components";
import { ApolloProvider } from "@apollo/client";
import client from "./services";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
