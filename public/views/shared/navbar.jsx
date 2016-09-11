'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'Navbar',
    render: function render() {
        return (
            <nav>
                <div className="nav-wrapper linus-nav red darken-3">
                    <a href="#!" className="brand-logo">LinusRed</a>
                    <a href="#" data-activates="mobile-drop-down" className="button-collapse">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/gohome">Home</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-drop-down">
                        <li><a href="/gohome">Home</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});
