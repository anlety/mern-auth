import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js';
import bodyParser from 'body-parser'

dotenv.config()

const app = express();
// app.use(express.json())

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
// This is going to allow json as input in our backend


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect('mongodb+srv://angelo:angelo@cluster0.vpsvpjt.mongodb.net/mern-auth?retryWrites=true&w=majority').then(()=> {
  console.log('Connected to mongoDB database');
}).catch((error)=> {
  console.log(error);
})