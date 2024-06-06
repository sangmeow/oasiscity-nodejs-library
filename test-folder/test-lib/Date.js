"use strict";
const oasiscity = require("oasiscity-nodejs-library");

// const assert = require("assert");

function main() {
  // let locale = "en-US";
  // let timeZone = "Asia/Seoul";

  console.log(oasiscity.Date.formatDateTime(new Date()));
  console.log(oasiscity.Date.formatDateTime(new Date(), "en-US", "Asia/Seoul"));
  console.log(oasiscity.Date.formatDateTime(new Date(), "en-US", "Asia/Tokyo"));
  console.log(oasiscity.Date.formatDateTime(new Date(), "en-US", "Asia/Singapore"));

  // assert.equal(oasiscity.Date.isDateTimeBeforeToday("2024-06-06 00:00:00"), true);
  // assert.equal(oasiscity.Date.isDateTimeBeforeToday("2025-06-06 00:00:00"), false);
  // assert.equal(oasiscity.Date.isDateTimeAfterToday("2024-06-06 06:00:00"), true);
  // assert.equal(oasiscity.Date.isDateTimeAfterToday("2024-06-05 23:59:59"), false);
  // assert.equal(oasiscity.Date.isDateTimeBetween("2024-06-05 23:59:59", "2024-06-06 06:00:00"), true);
  // assert.equal(oasiscity.Date.isDateTimeBetween("2024-06-06 23:59:59", "2024-06-07 00:00:00"), false);

  // assert.equal(oasiscity.Date.isDateTimeBeforeToday("2024-06-06 00:00:00", locale, timeZone), true);
  // assert.equal(oasiscity.Date.isDateTimeBeforeToday("2025-06-06 00:00:00", locale, timeZone), false);
  // assert.equal(oasiscity.Date.isDateTimeAfterToday("2024-06-06 06:00:00", locale, timeZone), true);
  // assert.equal(oasiscity.Date.isDateTimeAfterToday("2024-06-05 23:59:59", locale, timeZone), false);
  // assert.equal(oasiscity.Date.isDateTimeBetween("2024-06-05 23:59:59", "2024-06-06 06:00:00", locale, timeZone), true);
  // assert.equal(oasiscity.Date.isDateTimeBetween("2024-06-06 23:59:59", "2024-06-07 00:00:00", locale, timeZone), false);
}

main();
