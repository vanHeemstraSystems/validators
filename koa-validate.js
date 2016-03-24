/*
 * KoaValidate Validator
 *
 * See also: http://rethinkdb.com/blog/validation-techniques/
 */
module.exports = function() {
  var _KoaValidate = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))();
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
  console.log(server_prefix + " - Validators koa-validate required.");
  var koa-validate = require(path.join(paths.libraries, '/koa-validate.js'));
  _KoaValidate = koa-validate;
  return _KoaValidate;
};//does not call itself
