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
                <p>I'm currently working on this website, you can track my progress
                    <a href="https://github.com/linusred/linusred-webapp"> here</a>.
                </p>
                <p> So, a lot of stuff won't work right now. Sorry!</p>
                <Navbar/>
            </header>

        );
    }
});
