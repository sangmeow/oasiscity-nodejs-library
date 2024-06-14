"use strict";
const oasiscity = require("oasiscity-nodejs-library");

// const assert = require("assert");
const util = require("util");

const queryString = ["field1=value1&field2=value2&field3=value"];

function main() {
  console.log("queryStringToJson");
  console.log("--------------------------------------------------");
  queryString.forEach((qs) => {
    console.log(oasiscity.JSON.queryStringToJson(qs));
  });
  console.log("getMapFromList");
  console.log("--------------------------------------------------");
  const userInfo = {idx: 1, sid: "9999", username: "sickdog", password: "password", date: "Jan 19, 1984", nullValue: null};
  const resultGetMapFromList = oasiscity.JSON.getMapFromList(userInfo, ["sid", "username"]);
  console.log(util.inspect(resultGetMapFromList, {showHidden: false, depth: null, colors: true}));
}

main();
