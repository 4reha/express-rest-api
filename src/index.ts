import * as dotenv from 'dotenv';
import app from './server';

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`Server is running on ${port}`);
});