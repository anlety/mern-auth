import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Manu Lety!')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect(process.env.MONGO).then(()=> {
  console.log('Connected to mongoDB database');
}).catch((error)=> {
  console.log(error);
})