/** @jsx React.DOM */
var React = require('reactjs/react-bower:react.js')

var sum = require('./lib/sum.js');
var hello = require('./lib/hello.js');

React.render(<hello />, document.querySelector('.js-hello'));
