"use strict";

const isEmpty = require("./isEmpty");

/**
 * Convert querystring to JSON
 * @param {string} queryString
 * @returns {Object}
 */
function queryStringToJson(queryString) {
  if (isEmpty(queryString)) return {};
  if (queryString.startsWith("?")) queryString = queryString.substring(1);
  const pairs = queryString.split("&");
  // Reduce the pairs into a JSON object
  const result = pairs.reduce((accumulator, pair) => {
    const [key, value] = pair.split("=");
    // Decode the key and value to handle URL-encoded characters
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value || "");
    // Add the key-value pair to the accumulator object
    accumulator[decodedKey] = decodedValue;
    return accumulator;
  }, {});
  return result;
}

module.exports = {queryStringToJson};
