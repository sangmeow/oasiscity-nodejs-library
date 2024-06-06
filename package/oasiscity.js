"use strict"; // strict mode

/*
function library(opts) {
  if (!(this instanceof library)) return new library(opts); // singleton
}
library.prototype.deepCopy = require("./lib/deep_copy");
library.prototype.isNumber = require("./lib/isNumber");
*/

let library = {
  isEmpty: require("./lib/isEmpty"),
  isNumber: require("./lib/isNumber"),
  Number: require("./lib/Number"),
  Date: require("./lib/Date"),
  JSON: require("./lib/JSON"),
  deepCopy: require("./lib/deep_copy"),
  verifyKeyValue: require("./lib/verify_key_value"),
};

module.exports = library;
