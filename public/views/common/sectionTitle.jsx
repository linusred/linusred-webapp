'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'SectionTitle',
    render: function render() {
        return (
            <h2 className="section-title">
                <span>
                     <i className="small material-icons">{this.props.icon}</i>
                    {this.props.title}
                </span>
            </h2>
        );
    }
});
