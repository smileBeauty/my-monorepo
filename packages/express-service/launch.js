const express = require("express");
const { colors } = require("./extend");
const { readConfig } = require("./util");
const { logger } = require("./extend");

const config = readConfig();
const app = express();

app.get("/", (_, res) => {
  res.send("hello world");
});

app.listen(config.port, () => {
  const launchInfo = `app is running on ${config.port}`;
  console.info(colors.blue(launchInfo));
  logger.info(launchInfo);
});
