import React from "react";
import { render } from "react-dom";

const NoSSR = props => {
  return process.title === "browse" ? (
    <>{props.children}</>
  ) : (
    <span>hello server side rendering</span>
  );
};

const Hoge = () => {
  return window.location.pathname;
};

const App = () => {
  return <NoSSR>{process.title === "browse" ? <Hoge /> : null}</NoSSR>;
};

render(<App />, document.getElementById("app"));
