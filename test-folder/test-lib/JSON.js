"use strict";
const oasiscity = require("oasiscity-nodejs-library");

// const assert = require("assert");
//const util = require("util");

const queryString = ["field1=value1&field2=value2&field3=value"];

function main() {
  queryString.forEach((qs) => {
    console.log(oasiscity.JSON.queryStringToJson(qs));
  });
}

main();
