'use strict';

var React = require('react');
var Navbar = require('./navbar');

module.exports = React.createClass({
    displayName: 'Header',
    render: function render() {
        return (
            <header className="header red darken-3 z-depth-1">
                <img className="circle" src="/images/me.jpg"/>
                <h1>LinusRed</h1>
                <p>Software Engineer</p>
                <Navbar/>
            </header>

        );
    }
});
