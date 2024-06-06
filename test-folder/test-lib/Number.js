"use strict";
const oasiscity = require("oasiscity-nodejs-library");

const assert = require("assert");

function main() {
  // --------------------------------------------------
  assert.equal(oasiscity.Number.fillZeros(), "0000");
  assert.equal(oasiscity.Number.fillZeros(0), "0000");
  assert.throws(() => {
    oasiscity.Number.fillZeros("");
  }, Error); // error
  assert.throws(() => {
    oasiscity.Number.fillZeros("-");
  }, Error); // error
  assert.equal(oasiscity.Number.fillZeros(1), "0001");
  assert.equal(oasiscity.Number.fillZeros("1"), "0001");
  assert.equal(oasiscity.Number.fillZeros(9), "0009");
  assert.equal(oasiscity.Number.fillZeros("9"), "0009");
  assert.equal(oasiscity.Number.fillZeros(123), "0123");
  assert.equal(oasiscity.Number.fillZeros("123"), "0123");
  assert.throws(() => {
    oasiscity.Number.fillZeros(123456789);
  }, Error); // error
  assert.throws(() => {
    oasiscity.Number.fillZeros("123456789");
  }, Error); // error

  assert.equal(oasiscity.Number.fillZeros(1, 12), "000000000001");
  assert.equal(oasiscity.Number.fillZeros("1", 12), "000000000001");
  assert.equal(oasiscity.Number.fillZeros(9, 12), "000000000009");
  assert.equal(oasiscity.Number.fillZeros("9", 12), "000000000009");
  assert.equal(oasiscity.Number.fillZeros(123, 12), "000000000123");
  assert.equal(oasiscity.Number.fillZeros("123", 12), "000000000123");
  assert.equal(oasiscity.Number.fillZeros(123456789, 12), "000123456789");
  assert.equal(oasiscity.Number.fillZeros("123456789", 12), "000123456789");
  // --------------------------------------------------
  console.log("oasiscity.Number.getRandomNumberBetween(0, 100)");
  for (let i = 0; i < 30; i++) {
    // eslint-disable-next-line no-undef
    process.stdout.write(oasiscity.Number.getRandomNumberBetween(0, 100) + " ");
  }
  console.log(" ");
  // --------------------------------------------------
  console.log("oasiscity.Number.lottery(10)");
  for (let i = 0; i < 10; i++) {
    // eslint-disable-next-line no-undef
    process.stdout.write(oasiscity.Number.lottery(50) + " ");
  }
  console.log(" ");
  // --------------------------------------------------
  console.log("oasiscity.Number.lotteryDigit(10)");
  for (let i = 0; i < 100; i++) {
    // eslint-disable-next-line no-undef
    process.stdout.write(oasiscity.Number.lotteryDigit(100) + " ");
  }
  console.log(" ");
}

main();
