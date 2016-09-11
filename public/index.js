'use strict';

var Routes = require('./routes.jsx');

var ReactEngineClient = require('react-engine/lib/client');

var options = {
  routes: Routes,

  viewResolver: function(viewName) {
    return require('./views/' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', function onLoad() {
  ReactEngineClient.boot(options);
});
