/*
 * Validators
 * 
 * param: validator (e.g. 'koa')
 */
module.exports = function(validator) {
  var validator = toLowerCase(validator);
  var _Validators = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))(validator);
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
  console.log(server_prefix + " - Validators validator required.");
  _Validators.validator = require('./' + validator + '.js');
  return _Validators;
};//does not call itself
