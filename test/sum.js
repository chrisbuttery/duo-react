var assert = require('component/assert');
var sum = require('../lib/sum.js');

describe('sum', function() {
 it('should adds 1 + 2 to equal 3', function() {
   assert.equal(sum(1, 2), 3);
 });
});
