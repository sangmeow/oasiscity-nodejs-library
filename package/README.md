# READ ME

node version : nodejs version : 18.20.3

## Date.js

```javascript
/**
 * Convert date object to "YYYY-MM-DD HH:MM:SS" format
 * @param {Date} date given date time (YYYY-MM-DD HH:MM:SS)
 * @param {Locale} locale default : "en-US"
 * @param {string} timeZone default : "UTC"
 * @returns {String} formated to "YYYY-MM-DD HH:MM:SS"
 */
function formatDateTime(date, locale = "en-US", timeZone = "UTC")
```

```javascript
/**
 * Convert string type datetime to date type datetime
 * @param {string} dateTime given date time (YYYY-MM-DD HH:MM:SS)
 * @param {Locale} locale default : "en-US"
 * @param {string} timeZone default : "UTC"
 * @returns {Date}
 */
function convertDateTime(dateTime, locale = "en-US", timeZone = "UTC")
```

```javascript
/**
 * Is date before given date || Is date after today
 * @param {string} givenDateTime given date time (YYYY-MM-DD HH:MM:SS)
 * @param {Locale} locale default : "en-US"
 * @param {string} timeZone default : "UTC"
 * @returns {boolean}
 *
 * Must set time format to 23:59:59 if end date time is end of the day.
 */
function isDateTimeBeforeToday(givenDateTime, locale = "en-US", timeZone = "UTC")
```

```javascript
/**
 * Is date after given date
 * @param {string} givenDateTime given date time (YYYY-MM-DD HH:MM:SS)
 * @param {Locale} locale default : "en-US"
 * @param {string} timeZone default : "UTC"
 * @returns {boolean}
 */
function isDateTimeAfterToday(givenDateTime, locale = "en-US", timeZone = "UTC")
```

```javascript
/**
 * Is date between two dates
 * @param {string} startDateTime start datetime
 * @param {string} endDateTime end datetime
 * @param {Locale} locale default : "en-US"
 * @param {string} timeZone default : "UTC"
 * @returns {boolean}
 */
function isDateTimeBetween(startDateTime, endDateTime, locale = "en-US", timeZone = "UTC")
```

node version : nodejs version : 18.20.3

## deep_copy.js

```javascript
/**
 * Function for deep copying jsonobject and jsonarray
 * @param {Object} value target
 * @returns {Object}
 */
function deepCopy(value)
```

node version : nodejs version : 18.20.3

## isEmpty.js

```javascript
/**
 * Check variable is empty
 * @param {Object} v target
 * @returns {boolean}
 */
function isEmpty(value)
```

node version : nodejs version : 18.20.3

## isNumber.js

```javascript
/**
 * Validate string value is a number
 * @param {string} value target
 * @returns {boolean}
 */
function isNumberOnlyString(value)
```

```javascript
/**
 * Validate value is a number type variable
 * @param {Object} value target
 * @returns {boolean}
 */
function isNumberType(value)
```

node version : nodejs version : 18.20.3

## JSON.js

```javascript
/**
 * Convert querystring to JSON
 * @param {string} queryString
 * @returns {Object}
 */
function queryStringToJson(queryString)
```

node version : nodejs version : 18.20.3

## Number.js

```javascript
/**
 * Return string type value with filling zeros
 * @param {number|string} value number to fill zeros
 * @param {number} digit digits value number between 0~1024 | default 4
 * @returns {String}
 */
function fillZeros(value = 0, digit = 4)
```

```javascript
/**
 * Return random number between given number
 * @param {number} start number starts
 * @param {number} end number ends
 * @returns {number}
 */
function getRandomNumberBetween(start, end)
```

```javascript
/**
 * Return odds of winning
 * @param {number} percentage number between 0~100 (percentage%100)
 * @returns {boolean}
 */
function lottery(percentage)
```

```javascript
/**
 * Return odds of winning out of 1/denominator
 * @param {number} denominator number between 0~isSafeInteger
 * @returns {boolean}
 */
function lotteryDigit(denominator)
```

node version : nodejs version : 18.20.3

## verify_key_value.js

```javascript
/**
 * Return key values which exist
 * @param {Object} value target
 * @param {string[]} items search keys
 * @returns {Object}
 * ```js
 * {
 *   guest: '',
 *   start_ip: '192.168.0.0',
 *   end_ip: '192.168.0.255',
 *   cidr: '192.168.1.0/24',
 *   ss: ' ',
 *   enabled: false,
 *   flag: '',
 *   description: 'black list target'
 * }
 * { start_ip: '192.168.0.0', end_ip: '192.168.0.255' }
 * ```
 */
function verifyKeyValue(target, items)
```

```javascript
/**
 * Return key value existence result
 * @param {Object} value target
 * @param {string[]} items search keys
 * @returns {Object{string[],string[]}}
 */
function verifyEveryKeyValueExistResult(target, items)
```

```javascript
/**
 * Return key value which exist
 * @param {Object} value target
 * @param {string[]} items search keys
 * @returns {Object}
 */
function returnKeyValueExist(target, items)
```

node version : nodejs version : 18.20.3

## oasiscity.js

