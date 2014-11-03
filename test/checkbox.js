/** @jsx React.DOM */
var React = require('reactjs/react-bower:react.js');
var TestUtils = require('reactjs/react-bower:react-with-addons.js').addons.TestUtils;
var assert = require('component/assert');
var CheckboxWithLabel = require('../lib/checkbox.js');

describe('Checkbox', function(){

  beforeEach(function(){
    var target = document.body.querySelector('.js-sandbox');

    this.checkbox = React.renderComponent(
      <CheckboxWithLabel labelOn="On" labelOff="Off"></CheckboxWithLabel>,  target
    );
  });

  afterEach(function(){
    React.unmountComponentAtNode(this.checkbox.getDOMNode().parent);
  });

  it('should set the label to \'Off\' by default', function() {
    var label = TestUtils.findRenderedDOMComponentWithTag(this.checkbox, 'label');
    assert.equal(label.getDOMNode().textContent, 'Off');
  });

  it('should update the label to \'On\' onChange()', function() {
    var label = TestUtils.findRenderedDOMComponentWithTag(this.checkbox, 'label');
    this.checkbox.setState({isChecked: true});
    assert.equal(label.getDOMNode().textContent, 'On');
  });
})
