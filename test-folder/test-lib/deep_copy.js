"use strict";
const oasiscity = require("oasiscity-nodejs-library");

const util = require("util");

function main() {
  const jsonArrayList = require("./jsonArray.json");
  const jsonObjectList = require("./jsonObject.json");
  let i = oasiscity.deepCopy(jsonArrayList);
  let j = oasiscity.deepCopy(jsonObjectList);
  console.log("--------------------------------------------------");
  console.log(util.inspect(i, {showHidden: false, depth: null, colors: true}));
  console.log("--------------------------------------------------");
  console.log(util.inspect(j, {showHidden: false, depth: null, colors: true}));
  console.log("--------------------------------------------------");
}

main();
