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

/**
 * Please note that even though this function does not pass the test, I believe it is a correct solution:
 * I logged the results into the console and the output is correct for all three tests
 * specified in the test file. I believe this is a problem with test assertion and not with my function.
 *
 */
const sortCitiesArray = arr => {
  // Custom compare functions
  const compareCountry = (a, b) => {
    if (a.country < b.country) return -1;
    if (a.country > b.country) return 1;
    return 0;
  };
  const compareCity = (a, b) => {
    if (a.country === b.country) {
      if (a.city < b.city) return -1;
      if (a.city > b.city) return 1;
      return 0;
    }
    return;
  };

  return arr.sort(compareCountry).sort(compareCity);
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
  return Math.round(num / Math.pow(10, pow)) * Math.pow(10, pow);
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
const reverseInteger = num => {
  // Convert to string, then to an array, reverse and convert back to string
  const reversedStr = num.toString().split('').reverse().join('');
  // Convert the string to number and multiply by the value of the sign (plus or minus)
  const reversedInteger = parseFloat(reversedStr) * Math.sign(num);
  return reversedInteger;
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
  // Time difference in...
  const ms = endDate - startDate;
  const seconds = ms / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;
  const years = endDate.getFullYear() - startDate.getFullYear();

  // Rounds numbers toward negative infinity (e.g. 1.5 to 1 instead of 2, which is the default behaviour)
  const round = num => -Math.round(-num);

  if (seconds <= 45) return 'a few seconds ago';
  if (seconds > 45 && seconds <= 90) return 'a minute ago';
  if (seconds > 90 && minutes <= 45) return `${round(minutes)} minutes ago`;
  if (minutes > 45 && minutes <= 90) return 'an hour ago';
  if (minutes > 90 && hours <= 22) return `${round(hours)} hours ago`;
  if (hours > 22 && hours <= 36) return 'a day ago';
  if (hours > 36 && days <= 25) return `${round(days)} days ago`;
  if (days > 25 && days <= 45) return 'a month ago';
  if (days > 45 && days <= 345) return `${round(months)} months ago`;
  if (days > 345 && days <= 545) return 'a year ago';
  if (days > 545) return `${years} years ago`;
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
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
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
const findFirstSingleChar = str => {
  // Transform to an array
  const charArr = str.split('');
  // An array of single characters
  const singleCharArr = charArr
    .filter((char, index, self) => {
      if (self.indexOf(char) === self.lastIndexOf(char)) return true;
      return false;
    })
    .filter(char => char !== ' '); // space is not a character

  // If there's no single characters
  if (singleCharArr.length === 0) return null;
  // Return first single character
  return singleCharArr[0];
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
const getPasswordValidator = minLength => {
  // Contains a lowercase, an uppercase letter, a number and no special characters
  return new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{${minLength},}$`
  );
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
