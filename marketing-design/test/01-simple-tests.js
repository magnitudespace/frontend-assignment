const assert = require('assert');
const tasks = require('../tasks/01-simple-tasks');
it.optional = require('../extensions/it-optional');

describe('01-simple-tasks', function() {
  it.optional('getStringFromTemplate should create a string from template using given parameters', function() {
    assert.equal('Hello, John Doe!', tasks.getStringFromTemplate('John','Doe'));
    assert.equal('Hello, Chuck Norris!', tasks.getStringFromTemplate('Chuck','Norris'));
  });

  it.optional('removeLeadingAndTrailingWhitespaces should remove leading and trailing whitespaces from the string', function() {
    assert.equal('Abracadabra', tasks.removeLeadingAndTrailingWhitespaces('  Abracadabra'));
    assert.equal('cat', tasks.removeLeadingAndTrailingWhitespaces('cat'));
    assert.equal('Hello, World!', tasks.removeLeadingAndTrailingWhitespaces('\tHello, World! '));
  });

  it.optional('repeatString should repeat string specified number of times', function() {
    assert.equal('AAAAA', tasks.repeatString('A', 5));
    assert.equal('catcatcat', tasks.repeatString('cat', 3));
  });

  it.optional('getCardId should return the index of card in the initial deck', function() {
    [
         'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
         'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
         'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
         'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
    ].forEach((val, index) => {
        assert.equal(
            index,
            tasks.getCardId(val),
            `Invalid id for card '${val}':`
        )
    });
  });

  it.optional('getDistanceBetweenPoints should return a distance between points', function() {
    assert.equal(1, tasks.getDistanceBetweenPoints(0, 0, 0, 1));
    assert.equal(1, tasks.getDistanceBetweenPoints(0, 0, 1, 0));
    assert.equal(18.027756377319946, tasks.getDistanceBetweenPoints(-5, 0, 10, -10));
  });

  it.optional('findElement should return the index of specified value if exists', function () {
    [
        {
            arr: ['Ace', 10, true],
            value: 10,
            expected: 1
        },{
            arr: ['Array', 'Number', 'string'],
            value: 'Date',
            expected: -1
        },{
            arr: [0, 1, 2, 3, 4, 5],
            value: 5,
            expected: 5
        }
    ].forEach(data => {
        var actual = tasks.findElement(data.arr, data.value);
        assert.equal(
            data.expected,
            actual,
            `Index of '${data.value}' inside of [${data.arr}] = ${data.expected}, but actually ${actual}`
        );
    });
  });

  it.optional('getArrayOfPositives should return the array of positive values from specified array', function () {
    [
        {
            arr:      [ 0, 1, 2, 3, 4, 5 ],
            expected: [    1, 2, 3, 4, 5 ]
        },{
            arr:      [-1, 2, -5, -4, 0],
            expected: [    2           ]
        },{
            arr:      [],
            expected: []
        }
    ].forEach(data => {
        var actual = tasks.getArrayOfPositives(data.arr);
        assert.deepEqual(
            data.expected,
            actual
        );
    });
  });
});
