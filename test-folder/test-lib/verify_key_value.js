"use strict";
const oasiscity = require("oasiscity-nodejs-library");

const util = require("util");

let mp = {
  guest: "",
  start_ip: "192.168.0.0",
  end_ip: "192.168.0.255",
  cidr: "192.168.1.0/24",
  ss: " ",
  enabled: false,
  flag: "",
  description: "black list target",
};

function main() {
  console.log(util.inspect(mp, {showHidden: false, depth: null, colors: true}));
  console.log("verifyKeyValue");
  console.log("--------------------------------------------------");
  console.log(oasiscity.verifyKeyValue.verifyKeyValue(mp, []));
  console.log(
    oasiscity.verifyKeyValue.verifyKeyValue(mp, [
      "asdf",
      "guest",
      "start_ip",
      "end_ip",
    ])
  );
  // {}
  // { start_ip: '192.168.0.0', end_ip: '192.168.0.255' }
  console.log("verifyEveryKeyValueExistResult");
  console.log("--------------------------------------------------");
  console.log(oasiscity.verifyKeyValue.verifyEveryKeyValueExistResult(mp, []));
  console.log(
    oasiscity.verifyKeyValue.verifyEveryKeyValueExistResult(mp, [
      "asdf",
      "guest",
      "start_ip",
      "end_ip",
    ])
  );
  // { exist: [], notExist: [] }
  // { exist: [ 'asdf', 'guest' ], notExist: [ 'start_ip', 'end_ip' ] }
  console.log("returnKeyValueExist");
  console.log("--------------------------------------------------");
  console.log(oasiscity.verifyKeyValue.returnKeyValueExist(mp, []));
  console.log(
    oasiscity.verifyKeyValue.returnKeyValueExist(mp, [
      "asdf",
      "guest",
      "start_ip",
      "end_ip",
    ])
  );
  // {}
  // { asdf: false, guest: false, start_ip: true, end_ip: true }
}

main();
