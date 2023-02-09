module.exports = {
  port: 3000,
  colorsSwitch: true,
  logConfig: {
    /** trace | debug | info | warn | error | fatal */
    levels: 'debug',
    appenders: {

    },
    categories: {
      appenders: [],
      level: '',
      enableCallStack: false
    },
    pm2: false,
    pm2InstanceVar: 'NODE_APP_INSTANCE',
    disableClustering: true,
  }
}