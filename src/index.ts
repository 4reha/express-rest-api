import * as dotenv from 'dotenv';
import {networkInterfaces} from 'os';
import app from './server';

dotenv.config();
const net = networkInterfaces();

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`Server is running on http://${net.wlp3s0[0].address}:${port}`);
});