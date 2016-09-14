'use strict';

var React = require('react');
var Header = require('./header');

module.exports = React.createClass({
  displayName: 'Layout',
  render: function render() {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>LinusRed</title>
            <link rel='stylesheet' href='/css/materialize.min.css'/>
            <link rel='stylesheet' href='/css/linusred.css'/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

        </head>
        <body>
          <div>
              <Header/>
              {this.props.children}
          </div>
          <script src='/bundle.js'></script>
          <script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
          <script src='/js/materialize.min.js'></script>
          <script src='/js/materialize-setup.js'></script>

        </body>
      </html>
    );
  }
});
