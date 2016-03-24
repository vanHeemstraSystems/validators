/*
 * Koa Validator
 *
 * See also: http://rethinkdb.com/blog/validation-techniques/
 */
module.exports = function() {
  var _Koa = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))();
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
  console.log(server_prefix + " - Validators koa required.");
  var koa = require(path.join(paths.libraries, '/koa.js'));
  _Koa = koa;
  return _Koa;
};//does not call itself
