'use strict';

var React = require('react');
var AboutSummary = require('./aboutSummary');

module.exports = React.createClass({
  displayName: 'List',

  render: function render() {
    return (
        <div className="container">
            <AboutSummary/>
        </div>
    );
  }
});
