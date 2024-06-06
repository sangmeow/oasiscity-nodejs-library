"use strict";

const isEmpty = require("./isEmpty");

/**
 * Return key values which exist
 * @param {Object} value target
 * @param {string[]} items search keys
 * @returns {Object}
 * ```js
 * {
 *   guest: '',
 *   start_ip: '192.168.0.0',
 *   end_ip: '192.168.0.255',
 *   cidr: '192.168.1.0/24',
 *   ss: ' ',
 *   enabled: false,
 *   flag: '',
 *   description: 'black list target'
 * }
 * { start_ip: '192.168.0.0', end_ip: '192.168.0.255' }
 * ```
 */
function verifyKeyValue(target, items) {
  let returnValue = {};
  for (let key of items) {
    let keyFound = Object.hasOwnProperty.call(target, key);
    if (keyFound && !isEmpty(target[key])) returnValue[key] = target[key];
  }
  return returnValue;
}

/**
 * Return key value existence result
 * @param {Object} value target
 * @param {string[]} items search keys
 * @returns {Object{string[],string[]}}
 */
function verifyEveryKeyValueExistResult(target, items) {
  // Two arrays for return the result of exist and not exist key/value in the list
  let returnValue = {exist: [], notExist: []};
  for (let key of items) {
    let keyFound = Object.hasOwnProperty.call(target, key);
    if (!(keyFound && !isEmpty(target[key]))) returnValue.exist.push(key); // push exist key/value
    else returnValue.notExist.push(key); // push not exist key/value
  }
  return returnValue;
}

/**
 * Return key value which exist
 * @param {Object} value target
 * @param {string[]} items search keys
 * @returns {Object}
 */
function returnKeyValueExist(target, items) {
  let returnValue = {};
  for (let key of items) {
    let keyFound = Object.hasOwnProperty.call(target, key);
    if (keyFound && !isEmpty(target[key])) returnValue[key] = true;
    else returnValue[key] = false;
  }
  return returnValue;
}

module.exports = {
  verifyKeyValue,
  verifyEveryKeyValueExistResult,
  returnKeyValueExist,
};
