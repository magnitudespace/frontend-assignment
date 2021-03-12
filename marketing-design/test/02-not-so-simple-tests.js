const assert = require('assert');
const tasks = require('../tasks/02-not-so-simple-tasks');
it.optional = require('../extensions/it-optional');

describe('02-not-so-simple-tasks', function() {
  it.optional('sortCitiesArray should sort the array of objects using two keys', function () {
    [
        {
            arr:  [
               { country: 'Russia',  city: 'Moscow' },
               { country: 'Belarus', city: 'Minsk' },
               { country: 'Poland',  city: 'Warsaw' },
               { country: 'Russia',  city: 'Saint Petersburg' },
               { country: 'Poland',  city: 'Krakow' },
               { country: 'Belarus', city: 'Brest' }
            ],
            expected: [
               { country: 'Belarus', city: 'Brest' },
               { country: 'Belarus', city: 'Minsk' },
               { country: 'Poland',  city: 'Krakow' },
               { country: 'Poland',  city: 'Warsaw' },
               { country: 'Russia',  city: 'Moscow' },
               { country: 'Russia',  city: 'Saint Petersburg' }
            ]
        }, {
            arr:  [
               { country: 'D', city: '1' },
               { country: 'E', city: '1' },
               { country: 'A', city: '2' },
               { country: 'B', city: '1' },
               { country: 'B', city: '2' },
               { country: 'A', city: '1' }
            ],
            expected: [
               { country: 'A', city: '1' },
               { country: 'A', city: '2' },
               { country: 'B', city: '1' },
               { country: 'B', city: '2' },
               { country: 'D', city: '1' },
               { country: 'E', city: '1' }
            ]
        },{
            arr:  [
               { country: '5', city: '1' },
               { country: '1', city: '1' },
               { country: '1', city: '2' },
               { country: '1', city: '3' },
               { country: '2', city: '2' },
               { country: '1', city: '1' },
               { country: '1', city: '1' },
               { country: '2', city: '1' },
               { country: '3', city: '1' },
               { country: '3', city: '3' },
               { country: '2', city: '5' },
               { country: '5', city: '2' }
            ],
            expected: [
               { country: '1', city: '1' },
               { country: '1', city: '1' },
               { country: '1', city: '1' },
               { country: '1', city: '2' },
               { country: '1', city: '3' },
               { country: '2', city: '1' },
               { country: '2', city: '2' },
               { country: '2', city: '5' },
               { country: '3', city: '1' },
               { country: '3', city: '3' },
               { country: '5', city: '1' },
               { country: '5', city: '2' }
            ]
        }
    ].forEach(data => {
        var actual = tasks.sortCitiesArray(data.arr);
        assert.deepEqual(
            data.expected,
            actual
        );
    });
  });

  it.optional('roundToPowerOfTen should return an number rounded to specified power of 10', function() {
    assert.equal(1234, tasks.roundToPowerOfTen(1234,0));
    assert.equal(1230, tasks.roundToPowerOfTen(1234,1));
    assert.equal(1200, tasks.roundToPowerOfTen(1234,2));
    assert.equal(1000, tasks.roundToPowerOfTen(1234,3));

    assert.equal(9678, tasks.roundToPowerOfTen(9678,0));
    assert.equal(9680, tasks.roundToPowerOfTen(9678,1));
    assert.equal(9700, tasks.roundToPowerOfTen(9678,2));
    assert.equal(10000, tasks.roundToPowerOfTen(9678,3));
  });

  it.optional('reverseInteger should return the specified number in reverse order', () => {
    [
        { num: 12345, expected: 54321 },
        { num:  1111, expected:  1111 },
        { num: 87354, expected: 45378 },
        { num: 34143, expected :34143 }
    ].forEach(data => {
        var actual = tasks.reverseInteger(data.num);
        assert.strictEqual(
            actual,
            data.expected,
            `Reversed ${data.num} = ${data.expected}, but actual ${actual}`
        )
    });
  });

  it.optional('timespanToHumanString should return the human string representation of datetime period', () => {
    [
        {
            startDate: '2000-01-01 01:00:00.100',
            endDate:   '2000-01-01 01:00:00.200',
            expected:  'a few seconds ago'
        }, {
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 01:00:30.000',
            expected:  'a few seconds ago'
        }, {
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 01:00:45.000',
            expected:  'a few seconds ago'
        }, {
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 01:00:45.001',
            expected:  'a minute ago'
        }, {
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 01:01:00.000',
            expected:  'a minute ago'
        }, {
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 01:01:30.000',
            expected:  'a minute ago'
        }, {
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 01:01:30.001',
            expected:  '2 minutes ago'
        }, {
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 01:05:30.000',
            expected:  '5 minutes ago'
        },{
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 01:45:00.000',
            expected:  '45 minutes ago'
        },{
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 01:45:00.001',
            expected:  'an hour ago'
        },{
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 02:00:00.000',
            expected:  'an hour ago'
        },{
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 02:30:00.000',
            expected:  'an hour ago'
        },{
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 02:30:00.001',
            expected:  '2 hours ago'
        },{
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 05:30:00.000',
            expected:  '4 hours ago'
        },{
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 05:30:00.001',
            expected:  '5 hours ago'
        },{
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 23:00:00.000',
            expected:  '22 hours ago'
        },{
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-01 23:00:00.001',
            expected:  'a day ago'
        },{
            startDate: '2000-01-01 01:00:00.000',
            endDate:   '2000-01-02 01:00:00.000',
            expected:  'a day ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2000-01-02 12:00:00.000',
            expected:  'a day ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2000-01-02 12:00:00.001',
            expected:  '2 days ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2000-01-05 12:00:00.000',
            expected:  '4 days ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2000-01-26 00:00:00.000',
            expected:  '25 days ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2000-01-26 00:00:00.001',
            expected:  'a month ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2000-02-01 00:00:00.000',
            expected:  'a month ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2000-02-15 00:00:00.000',
            expected:  'a month ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2000-02-16 00:00:00.000',
            expected:  '2 months ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2000-05-20 00:00:00.000',
            expected:  '5 months ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2000-12-10 00:00:00.000',
            expected:  '11 months ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2000-12-12 00:00:00.000',
            expected:  'a year ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2001-02-15 00:00:00.001',
            expected:  'a year ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2001-06-01 00:00:00.001',
            expected:  'a year ago'
        },{
            startDate: '2000-01-01 00:00:00.000',
            endDate:   '2015-02-15 00:00:00.001',
            expected:  '15 years ago'
        }
    ].forEach(data => {
        var actual = tasks.timespanToHumanString(new Date(data.startDate), new Date(data.endDate));
        assert.equal(
            actual,
            data.expected,
            `timespanToHumanString('${data.startDate}', '${data.endDate}') shoud return '${data.expected}', but actually '${actual}'`
        )
    });
  });

  it.optional('Rectangle constructor should return the rectangle object', function () {
    var rect = new tasks.Rectangle(10,20);

    assert.equal(
        typeof rect,
        'object',
        'Result of Rectangle constructor should be an object'
    );
    assert(
        rect.hasOwnProperty('width'),
        'Result of Rectangle constructor should be an object with "width" property'
    );
    assert.equal(
        rect.width,
        10,
        'Result of new Rectangle(10,20) should be an object with "width" property equals to 10'
    );
    assert(
        rect.hasOwnProperty('height'),
        'Result of new Rectangle(10,20) should be an object with "height" property'
    );
    assert.equal(
        rect.width,
        10,
        'Result of new Rectangle(10,20) should be an object with "height" property equals to 20'
    );
    assert.equal(
        typeof rect.getArea,
        'function',
        'Result of Rectangle constructor should be an object with "getArea" method'
    );
    assert.equal(
        rect.getArea(),
        200,
        'Result of (new Rectangle(10,20)).getArea() should return the correct area of specified rectangle'
    );
    assert.equal(
        (new tasks.Rectangle(3,8)).getArea(),
        24,
        'Result of (new Rectangle(3,8)).getArea() should return the correct area of specified rectangle'
    );
  });

  it.optional('findFirstSingleChar should return the first unrepeated char from string', () => {
    [
        { str: 'The quick brown fox jumps over the lazy dog', expected: 'T' },
        { str: 'abracadabra', expected: 'c' },
        { str: 'entente', expected: null }
    ].forEach(data => {
        var actual = tasks.findFirstSingleChar(data.str);
        assert.equal(
            actual,
            data.expected,
            `First single char of '${data.str}' = '${data.expected}', but actual '${actual}'`
        )
    });
  });

  it.optional('getPasswordValidator should return the password validator', function () {
    var result = tasks.getPasswordValidator(6);

    [
        'password',
        'PASSWORD',
        'pa55word',
        'PASSW0RD',
        'Pa55',
        'Pa__W0rd',
        '   PassW0rd    '
    ].forEach((str) => {
        assert(
            !result.test(str),
            `Regex matches '${str}'`
        );
    });

    [
        'PA55word',
        'passW0rd',
        'pa55W0rd',
        'pa55wordPASSW0RD',
        'a1A2b3B4'
    ].forEach((str) => {
        assert(
            result.test(str),
            `Regex does not match '${str}'`
        );
    });

    assert(
       !'abcdABCD1234'.match(tasks.getPasswordValidator(20)),
       'Password validator do not validate minLength restriction'
    );
  });
});
