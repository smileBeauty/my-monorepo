import React from "react";
import { render } from "react-dom";
import App from "./app";

render(<App />, document.getElementById("root"));

export const bootstrap = async () => {
  console.log("bootstrap");
};

export const mount = async () => {
  console.log("mount");
  render(<App />, document.getElementById("root"));
};

export const unmount = async () => {
  console.log("unmount");
};
