"use strict";

const number_regex = new RegExp("^[0-9]+$");

/**
 * Validate string value is a number
 * @param {string} value target
 * @returns {boolean}
 */
function isNumberOnlyString(value) {
  return number_regex.test(value);
}

/**
 * Validate value is a number type variable
 * @param {Object} value target
 * @returns {boolean}
 */
function isNumberType(value) {
  return typeof value === "number";
}

module.exports = {isNumberOnlyString, isNumberType};
