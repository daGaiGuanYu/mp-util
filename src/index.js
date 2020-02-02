const other = require('./lib/other')

module.exports = {
  getTitlePosition: require('./lib/get-title-position/index'),
  Request: require('./lib/request/index'),
  pushGlobalBehavior: require('./lib/global-behavior'),
  getCurrentPage: require('./lib/get-current-page'),
  toast: require('./lib/toast'),
  handleSequelizeUpsertResult: other.handleSequelizeUpsertResult,
  Date: require('./lib/date/index')
}
