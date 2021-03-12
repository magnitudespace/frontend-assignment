const assert = require('assert');
const tasks = require('../tasks/05-dominoes-tasks');
it.optional = require('../extensions/it-optional');

describe('05-dominoes-tasks', function() {
  it.optional('canDominoesMakeRow should answer if specified subset of dominoes can be arranged in a row', () => {
    [
         [
             [0,1], [1,1]
         ],[
             [1,3], [2,3], [1,4], [2,4], [1,5], [2,5]
         ],[
             [1,1], [1,2], [2,3], [2,5], [2,6], [3,6], [5,6], [6,6]
         ]
     ].forEach(data => {
        var actual = tasks.canDominoesMakeRow(data);
        assert.equal(
            actual,
            true,
            `[${data.join('],[')}] can be arrangement in a row`
        );
    });


    [
         [
             [0,1], [2,3]
         ],[
             [1,1], [2,2], [1,5], [5,6], [6,3]
         ],[
             [0,0], [0,1], [0,2], [0,3], [1,1], [1,2], [1,3], [2,2], [2,3], [3,3]
         ]
     ].forEach(data => {
        var actual = tasks.canDominoesMakeRow(data);
        assert.equal(
            actual,
            false,
            `[${data.join('],[')}] can't be arrangement in a row`
        );
    });
  });
});
