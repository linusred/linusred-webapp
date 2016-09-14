'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'Navbar',
    render: function render() {
        return (
            <nav>
                <div className="nav-wrapper linus-nav red darken-3">
                    <a href="#" data-activates="mobile-drop-down" className="button-collapse">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="center hide-on-med-and-down">
                        <li><a href="/gohome">About</a></li>
                        <li><a href="/gohome">Resume</a></li>
                        <li><a href="/gohome">Contact</a></li>
                        <li><a href="/gohome">Projects</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-drop-down">
                        <li><a href="/gohome">Home</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});
