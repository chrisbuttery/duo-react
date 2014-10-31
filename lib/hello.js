/** @jsx React.DOM */
var React = require('reactjs/react-bower:react.js');

var SayHello = React.createClass({
  render: function() {
    return (
      <h1>Hello, world!</h1>
    );
  }
});

module.exports = SayHello;
