/**
 * Sorts the specified array by country name first and city name (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
  *      { country: 'Russia',  city: 'Moscow' },
  *      { country: 'Belarus', city: 'Minsk' },
  *      { country: 'Poland',  city: 'Warsaw' },
  *      { country: 'Russia',  city: 'Saint Petersburg' },
  *      { country: 'Poland',  city: 'Krakow' },
  *      { country: 'Belarus', city: 'Brest' }
  *    ]
  *                      =>
  *    [
  *      { country: 'Belarus', city: 'Brest' },
  *      { country: 'Belarus', city: 'Minsk' },
  *      { country: 'Poland',  city: 'Krakow' },
  *      { country: 'Poland',  city: 'Warsaw' },
  *      { country: 'Russia',  city: 'Moscow' },
  *      { country: 'Russia',  city: 'Saint Petersburg' }
  */
const sortCitiesArray = (arr) => {
  // throw new Error('Not implemented');
  return arr.sort(function(a, b) {
    if (a.country < b.country) {
      return -1;
    }
    if (b.country > a.country) {
      return 1;
    }
    if (a.country === b.country) {
      if (a.city < b.city) {
        return -1;
      }
    }
    return 0;
  });
};

/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
const roundToPowerOfTen = (num, pow) => {
  // throw new Error('Not implemented');
  let devider

  if (pow === 0) {
    devider = 1;
  } else if (pow === 1) {
    devider = 10;
  } else if (pow === 2) {
    devider = 100;
  } else if (pow === 3) {
    devider = 1000;
  } else {
    devider = 0;
  }

  return Math.round(num/devider)*devider;
};

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
const reverseInteger = (num) => {
  // throw new Error('Not implemented');
  let s = num.toString();
  let r = s.split("").reverse().join("");
  return Number(r);
};

/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
const timespanToHumanString = (startDate, endDate) => {
  // throw new Error('Not implemented');
  // Get difference in milliseconds
  let diff = new Date(endDate) - new Date(startDate);
  // Set storage variable
  let result;
  // deploy logic on difference (diff) and output human readable string
  // Check 0 to 45 seconds
  if (diff <= 45000) {
    result = 'a few seconds ago';
  // Check 45 to 90 seconds
  } else if (diff <= 90000) {
    result = 'a minute ago';
  // Check 90 seconds to 45 minutes
  } else if (diff <= 2700000) {
  // Use modulo to round up or down minutes
    if (diff % 2 !== 0 ) {
      result = `${Math.round(diff / 1000 / 60)} minutes ago`;
    } else {
      result = `${Math.floor(diff / 1000 / 60)} minutes ago`;
    }
  // Check 45 to 90 minutes
  } else if (diff <= 5400000) {
      result = `an hour ago`;
  // Check 90 minutes to 22 hours
  } else if (diff <= 79200000) {
  // Use modulo to round up or down hours
    if (diff % 2 !== 0 ) {
      result = `${Math.round(diff / 1000 / 60 / 60)} hours ago`;
    } else {
      result = `${Math.floor(diff / 1000 / 60 / 60)} hours ago`;
    }
  // Check 22 to 36 hours
  } else if (diff <= 129600000) {
    result = `a day ago`;
  // Check 36 hours to 25 days
  } else if (diff <= 2160000000) {
  // Use modulo to round up or down days
    if (diff % 2 !== 0 ) {
      result = `${Math.round(diff / 1000 / 60 / 60 / 24)} days ago`;
    } else {
      result = `${Math.floor(diff / 1000 / 60 / 60 / 24)} days ago`;
    }
  // Check 25 to 45 days
  } else if (diff <= 3888000000) {
    result = `a month ago`;
  // check 45 to 345 days
  } else if (diff <= 2.9808e+10) {
    result = `${Math.round(diff / 1000 / 60 / 60 / 24 / 30.436875)} months ago`;
  // check 345 to 545 days
  } else if (diff <= 4.7088e+10) {
    return `a year ago`;
  // everything above 345 days
  } else {
    result = `${Math.round(diff / 1000 / 60 / 60 / 24 / 30.436875 / 12)} years ago`;
  }
  return result;
};

/**
 * Returns the rectagle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    var r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */

class Rectangle {
  constructor(width, height) {
    // throw new Error('Not implemented');
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
const findFirstSingleChar = (str) => {
  // throw new Error('Not implemented');
  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);
    if (str.indexOf(character) === i && str.indexOf(character, i + 1) == -1) {
      return character;
    }
  }
  return null;
};

/**
 * Returns the password validator regex.
 * Regex will validate a password to make sure it meets the follwing criteria:
 *  - At least specified characters long (argument minLength)
 *  - Contains a lowercase letter
 *  - Contains an uppercase letter
 *  - Contains a number
 *  - Valid passwords will only be alphanumeric characters.
 *
 * @param {number} minLength
 * @return {Regex}
 *
 * @example
 *   let validator = getPasswordValidator(6);
 *   'password'.match(validator)  => false
 *   'Pa55Word'.match(validator)  => true
 *   'PASSw0rd'.match(validator)  => true
 *   'PASSW0RD'.match(validator)  => false
 *   'Pa55'.match(validator) => false
 */
const getPasswordValidator = (minLength) => {
  // throw new Error('Not implemented');
  const regString = "^(?=\\S\\w[^_])(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{length,}";
  const replRegString = regString.replace('length', minLength);
  const regex = new RegExp(replRegString);
  return regex;
};

module.exports = {
  sortCitiesArray,
  roundToPowerOfTen,
  reverseInteger,
  timespanToHumanString,
  Rectangle,
  findFirstSingleChar,
  getPasswordValidator,
};
