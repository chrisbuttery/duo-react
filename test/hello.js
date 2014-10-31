/** @jsx React.DOM */
var React = require('reactjs/react-bower:react.js');

var assert = require('component/assert');
var hello = require('../lib/hello.js');

describe('Say Hello', function(){
  it('should return false', function(){
    assert.equals(2, 2);
  })
})
