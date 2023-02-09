const path = require("path");

/**
 * 读取配置文件 根据precess.env.launchEnv
 * @default localConfig
 */
const readConfig = () => {
  const configPath = path.join(__dirname, '../config');
  const config = require(configPath);
  return config[process.env.launchEnv || 'local']
}

module.exports = {
  readConfig
}