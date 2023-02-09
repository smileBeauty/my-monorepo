import React from "react";
import { render } from "react-dom";
// import App from "./app";

// 子应用没有接入 single-spa
// if (!window.__single_spa_root) {
//   console.log("没有父应用");
//   render(<App />, document.getElementById("root"));
// }

export const bootstrap = async () => {
  console.log("bootstrap");
};

export const mount = async () => {
  console.log("mount");
  alert(111111);
  let dom = document.querySelector("#root");
  if (dom) {
    dom.innerHTML = "1111111";
  }
};

export const unmount = async () => {
  console.log("unmount");
};
