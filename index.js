/** @jsx React.DOM */
var React = require('reactjs/react-bower:react.js');

var sum = require('./lib/sum.js');

var checkbox = require('./lib/checkbox.js');

React.render(
  <checkbox labelOn="Thanks" labelOff="Click Me" />,
  document.querySelector('.js-hello')
);
