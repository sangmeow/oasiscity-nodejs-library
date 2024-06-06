"use strict";
const oasiscity = require("oasiscity-nodejs-library");

const assert = require("assert");

function main() {
  // --------------------------------------------------
  assert.equal(oasiscity.isNumber.isNumberOnlyString(), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString(null), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString(undefined), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString(" "), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString("abc"), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString({}), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString([]), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString("e123"), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString("123,456"), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString("123.12"), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString("123.456.123"), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString(" 123"), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString("123 "), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString("123 456"), false);
  assert.equal(oasiscity.isNumber.isNumberOnlyString("0"), true); // true
  assert.equal(oasiscity.isNumber.isNumberOnlyString("1"), true); // true
  assert.equal(oasiscity.isNumber.isNumberOnlyString("123"), true); // true
  // --------------------------------------------------
  assert.equal(oasiscity.isNumber.isNumberType(), false);
  assert.equal(oasiscity.isNumber.isNumberType(null), false);
  assert.equal(oasiscity.isNumber.isNumberType(undefined), false);
  assert.equal(oasiscity.isNumber.isNumberType(""), false);
  assert.equal(oasiscity.isNumber.isNumberType("abc"), false);
  assert.equal(oasiscity.isNumber.isNumberType("123"), false);
  assert.equal(oasiscity.isNumber.isNumberType(0), true); // true
  assert.equal(oasiscity.isNumber.isNumberType(1), true); // true
  assert.equal(oasiscity.isNumber.isNumberType(123), true); // true
  assert.equal(oasiscity.isNumber.isNumberType(123.12), true); // true
  // --------------------------------------------------
  // assert.equal(oasiscity.isNumber.isNumberString("0"), true);
  // assert.equal(oasiscity.isNumber.isNumberString("1"), true);
  // assert.equal(oasiscity.isNumber.isNumberString("12"), true);
  // assert.equal(oasiscity.isNumber.isNumberString("123"), true);
  // assert.equal(oasiscity.isNumber.isNumberString("123.0"), true);
  // assert.equal(oasiscity.isNumber.isNumberString("1,234"), true);
  // assert.equal(oasiscity.isNumber.isNumberString("12,34.56"), true);
  // assert.equal(oasiscity.isNumber.isNumberString("123,,456"), true);
  // assert.equal(oasiscity.isNumber.isNumberString("123,456"), true);
  // assert.equal(oasiscity.isNumber.isNumberString("123,456.789"), true);
  // assert.equal(oasiscity.isNumber.isNumberString("123,456.78.89"), false);
}

main();
