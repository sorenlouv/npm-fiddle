var React = require('react');

// Usage: <Spinner isLoading="false"/>
var Spinner = React.createClass({
  render: function() {
    var spinner = React.createElement('img', {src: require('./img/spinner.gif')});
    return this.props.isLoading ? spinner : null;
  },
});

module.exports = Spinner;
