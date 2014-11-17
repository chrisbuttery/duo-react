/** @jsx React.DOM */
var React = require('reactjs/react-bower:react.js');
require('paulmillr/es6-shim');

var arr = [5, 10, 15, 10];

var res = arr.find(
  function (item) {
    return item / 2 === 5;
  }
);

console.log(res);

var sum = require('./lib/sum.js');

var checkbox = require('./lib/checkbox.js');


React.render(
  <checkbox labelOn="Thanks" labelOff="Click Me" />,
  document.querySelector('.js-hello')
);
