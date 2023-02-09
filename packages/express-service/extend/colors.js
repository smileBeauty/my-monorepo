const colors = require("colors/safe");
const { readConfig } = require("../util");

if (readConfig().colorsSwitch) {
  colors.enable();
} else {
  colors.disable();
}

module.exports = colors;