/*
 * KoaBody Validator
 *
 * See also: http://rethinkdb.com/blog/validation-techniques/
 */
module.exports = function() {
  var _KoaBody = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))();
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
  console.log(server_prefix + " - Validators koa-body required.");
  var koa-body = require(path.join(paths.libraries, '/koa-body.js'));
  _KoaBody = koa-body;
  return _KoaBody;
};//does not call itself
