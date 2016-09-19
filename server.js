'use strict';

const PORT = 8080;

import {join} from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import ReactEngine from 'react-engine';
import routes from './public/routes.jsx';
import {getLatestSong} from './lib/lastfm'
import {getLastThreeRepos} from './lib/github'
let app = express();

let engine = ReactEngine.server.create({
  routes: routes,
  routesFilePath: join(__dirname, '/public/routes.jsx'),
  performanceCollector: function(stats) {
    console.log(stats);
  }
});


app.engine('.jsx', engine);


app.set('views', join(__dirname, '/public/views'));


app.set('view engine', 'jsx');


app.set('view', ReactEngine.expressView);


app.use(express.static(join(__dirname, '/public')));

app.get('/repoList', getLastThreeRepos);
app.get('/lastSong', getLatestSong);

app.get('*', function(req, res) {
  res.render(req.url);
});

app.use(function(err, req, res, next) {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }

  if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
    return res.redirect(302, err.redirectLocation);
  }
  else if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
    return res.status(404).render(req.url);
  }
  else {
    return res.status(500).render('500.jsx', {
      err: {
        message: err.message,
        stack: err.stack
      }
    });
  }
});

const server = app.listen(PORT, function() {
  console.log('Example app listening at http://localhost:%s', PORT);
});
