const log4js = require("log4js");
const { readConfig } = require("./util");
const config = readConfig();

// log4js.configure({
//   appenders: { cheese: { type: "file", filename: "cheese.log" } },
//   categories: { default: { appenders: ["cheese"], level: "debug" } },
// });

log4js.configure(config.logConfig);

const logger = log4js.getLogger();

module.exports = logger;