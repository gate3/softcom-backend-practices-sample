/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cluster = require('cluster');
const logger = require('morgan');
const glob = require('glob');
const cp = require('child_process');
const asyncHelper = require('async');
const dbConnect = require('./config/database');

const moviesRoutes = require('./src/movies/routes');

module.exports = async () => {
  dbConnect.then(() => {
    const app = express();

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.use('/movies', moviesRoutes);

    if (cluster.isMaster) {
      glob('!(node_modules)/**/*.worker.js', (er, files) => {
        files.forEach((f) => {
          cp.fork(`${__dirname}/${f}`);
        });
      });

      glob('!(node_modules)/**/*.model.js', (er, files) => {
        asyncHelper.eachOf(files, async (f) => {
          const m = require(`./${f}`);
          await m.createCollection(); // ensure all collections have been created due to transactions
        });
      });
    }
  });
};
