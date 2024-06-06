"use strict";

/**
 * Convert date object to "YYYY-MM-DD HH:MM:SS" format
 * @param {Date} date given date time (YYYY-MM-DD HH:MM:SS)
 * @param {Locale} locale default : "en-US"
 * @param {string} timeZone default : "UTC"
 * @returns {String} formated to "YYYY-MM-DD HH:MM:SS"
 */
function formatDateTime(date, locale = "en-US", timeZone = "UTC") {
  if (!(date instanceof Date)) throw new Error("Invalid date type.");
  const newDate = new Date(new Date().toLocaleString(locale, {timeZone}));
  const padZero = (num) => String(num).padStart(2, "0");
  const year = date.getFullYear();
  const month = padZero(newDate.getMonth() + 1); // getMonth() returns month from 0 to 11
  const day = padZero(newDate.getDate());
  const hours = padZero(newDate.getHours());
  const minutes = padZero(newDate.getMinutes());
  const seconds = padZero(newDate.getSeconds());
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * Convert string type datetime to date type datetime
 * @param {string} dateTime given date time (YYYY-MM-DD HH:MM:SS)
 * @param {Locale} locale default : "en-US"
 * @param {string} timeZone default : "UTC"
 * @returns {Date}
 */
function convertDateTime(dateTime, locale = "en-US", timeZone = "UTC") {
  // Validate datetime value
  const date_regex = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$");
  if (!date_regex.test(dateTime)) {
    throw new Error("Invalid date format. Please use YYYY-MM-DD.");
  }
  // Get every single datetime values
  const [datePart, timePart] = dateTime.split(" ");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hours, minutes, seconds] = timePart.split(":").map(Number);
  // Create date object with given datetime
  const dateObject = new Date(new Date(year, month - 1, day, hours, minutes, seconds).toLocaleString(locale, {timeZone}));
  // Validate datetime has correct value
  if (isNaN(dateObject.getTime())) throw new Error("Invalid date components.");
  return dateObject;
}

/**
 * Is date before given date || Is date after today
 * @param {string} givenDateTime given date time (YYYY-MM-DD HH:MM:SS)
 * @param {Locale} locale default : "en-US"
 * @param {string} timeZone default : "UTC"
 * @returns {boolean}
 *
 * Must set time format to 23:59:59 if end date time is end of the day.
 */
function isDateTimeBeforeToday(givenDateTime, locale = "en-US", timeZone = "UTC") {
  const today = new Date(new Date().toLocaleString(locale, {timeZone}));
  // Convert "YYYY-MM-DD HH:MM:SS" date string to date object
  const givenDateTimeObject = convertDateTime(givenDateTime, locale, timeZone);
  // console.log(`Today : ${today}`);
  // console.log(`Given : ${givenDateTimeObject}`);
  // Return result
  return today >= givenDateTimeObject;
}

/**
 * Is date after given date
 * @param {string} givenDateTime given date time (YYYY-MM-DD HH:MM:SS)
 * @param {Locale} locale default : "en-US"
 * @param {string} timeZone default : "UTC"
 * @returns {boolean}
 */
function isDateTimeAfterToday(givenDateTime, locale = "en-US", timeZone = "UTC") {
  const today = new Date(new Date().toLocaleString(locale, {timeZone}));
  // Convert "YYYY-MM-DD HH:MM:SS" date string to date object
  const givenDateTimeObject = convertDateTime(givenDateTime, locale, timeZone);
  // console.log(`Today : ${today}`);
  // console.log(`Given : ${givenDateTimeObject}`);
  // Return result
  return givenDateTimeObject >= today;
}

/**
 * Is date between two dates
 * @param {string} startDateTime start datetime
 * @param {string} endDateTime end datetime
 * @param {Locale} locale default : "en-US"
 * @param {string} timeZone default : "UTC"
 * @returns {boolean}
 */
function isDateTimeBetween(startDateTime, endDateTime, locale = "en-US", timeZone = "UTC") {
  const today = new Date(new Date().toLocaleString(locale, {timeZone}));
  // Convert "YYYY-MM-DD HH:MM:SS" date string to date object
  const startDateTimeObject = convertDateTime(startDateTime, locale, timeZone);
  const endDateTimeObject = convertDateTime(endDateTime, locale, timeZone);
  // console.log(`Start : ${startDateTimeObject}`);
  // console.log(`Today : ${today}`);
  // console.log(`END   : ${endDateTimeObject}`);
  // Return result
  return startDateTimeObject <= today && today <= endDateTimeObject;
}

module.exports = {formatDateTime, isDateTimeBeforeToday, isDateTimeAfterToday, isDateTimeBetween};
