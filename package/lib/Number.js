"use strict";

const isNumber = require("./isNumber");

/**
 * Return string type value with filling zeros
 * @param {number|string} value number to fill zeros
 * @param {number} digit digits value number between 0~1024 | default 4
 * @returns {String}
 */
function fillZeros(value = 0, digit = 4) {
  // Make it to string type | user might input infinite number value
  let temp = typeof value === "string" ? value : value.toString(); // The String object overrides the toString() method of the Object object; it does not inherit Object.prototype.toString(). For String objects, the toString() method returns a string representation of the object and is the same as the String.prototype.valueOf() method.
  // Value length must not bigger than digit value
  if (temp.toString().length > digit) throw new Error("Length of a number must to longer than digit value.");
  // Validate the value whether is normal number string
  if (!isNumber.isNumberOnlyString(temp)) throw new Error("Invalid input value.");
  if (!(typeof digit === "number" && digit >= 0 && digit <= 1024)) throw new Error("Invalid digit value.");
  return temp.padStart(digit, "0");
}

/**
 * Return random number between given number
 * @param {number} start number starts
 * @param {number} end number ends
 * @returns {number}
 */
function getRandomNumberBetween(start, end) {
  start = Math.ceil(start); // ceil : rounds up
  end = Math.floor(end); // floor : rounds down
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

/**
 * Return odds of winning
 * @param {number} percentage number between 0~100 (percentage%100)
 * @returns {boolean}
 */
function lottery(percentage) {
  if (percentage < 0 || percentage > 100) throw new Error("Percentage must be between 0 and 100.");
  const randomValue = Math.round(Math.random() * 100);
  return randomValue < percentage;
}

/**
 * Return odds of winning out of 1/denominator
 * @param {number} denominator number between 0~isSafeInteger
 * @returns {boolean}
 */
function lotteryDigit(denominator) {
  if (denominator < 0 && !Number.isSafeInteger(denominator)) throw new Error("Denominator value must be safe integer.");
  const randomValue = Math.round(Math.random() * denominator);
  return randomValue === 0;
}

module.exports = {fillZeros, getRandomNumberBetween, lottery, lotteryDigit};
