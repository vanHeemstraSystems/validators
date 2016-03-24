/*
 * KoaRouter Validator
 *
 * See also: http://rethinkdb.com/blog/validation-techniques/
 */
module.exports = function() {
  var _KoaRouter = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))();
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
  console.log(server_prefix + " - Validators koa-router required.");
  var koa-router = require(path.join(paths.libraries, '/koa-router.js'));
  _KoaRouter = koa-router;
  return _KoaRouter;
};//does not call itself
