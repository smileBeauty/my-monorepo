import { registerApplication, start } from "single-spa";
import System from "systemjs";

// window.__single_spa_root = {};
// System.register("app1", "http://localhost:8082/main.bundle.js");

registerApplication(
  "app1",
  () => System.import("app1"),
  () => location.pathname.startsWith("/"),
  {}
);

start();
