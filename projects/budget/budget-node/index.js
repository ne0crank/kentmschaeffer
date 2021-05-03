import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';
import config from './server/config.js';

import models, { dbConnect } from './models';
import routes from './routes';

// Initialialize Node.js app server
const budgetApp = express();
budgetApp.use(cors());
budgetApp.use(bodyParser.json());
budgetApp.use(bodyParser.urlencoded({ extended: true }));
budgetApp.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin(process.env.APP_USER),
  };
  next();
});

dbConnect()
  .then( async () => {
    budgetApp.listen(config.app.port, (err) => {
      if (err) throw err;
      console.log(`express is listening on: /${config.app.uri}`);
    });
  });
