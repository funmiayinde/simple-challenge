import '@babel/polyfill'
import bodyParser from 'body-parser';
import express from 'express';
import error from './middlewares/error';
import routes from './routes';

// Create Express App
const app = express();
app.use(bodyParser.json());

// Routes
app.use('/', routes);
app.use(error);

export default app;
