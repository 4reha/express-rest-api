import express from 'express';
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';
import { createNewUser, signin } from './handlers/user';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({"message": "Welcome"});
  res.status(200);
});
app.post('/', async (req, res) => {
  res.status(405);
  res.json({ message: 'Method not allowed' });
  return;
});

app.use('/api', protect, router);
app.post('/user', 
  body('username').isString(),
  body('password').isString(),
  handleInputErrors, createNewUser);
app.get('/user', async (req, res) => {
  res.status(405);
  res.json({ message: 'Method not allowed' });
  return;
});
app.post('/signin', 
  body('username').isString(),
  body('password').isString(),
  handleInputErrors, signin);
app.get('/signin', async (req, res) => {
  res.status(405);
  res.json({ message: 'Method not allowed' });
  return;
});

app.use((err, req, res, next) => {
  res.status(err.status);
  res.json({ message: err.message });
  return;
});
export default app;