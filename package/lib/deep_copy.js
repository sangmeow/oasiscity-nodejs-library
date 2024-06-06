"use strict";

/*
  NOTE : 
  Array.isArray()     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
*/

/**
 * Function for deep copying jsonobject and jsonarray
 * @param {Object} value target
 * @returns {Object}
 */
function deepCopy(value) {
  let copied = Array.isArray(value) ? [] : {};
  for (let key in value) copied[key] = value[key];
  return copied;
}

module.exports = deepCopy;
