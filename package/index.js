'use strict';

const number_regex = new RegExp('^[0-9]+$');

function isNumberOnlyString(v){
  return number_regex.test(v);
}

module.exports = isNumberOnlyString