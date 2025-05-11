import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv';

// Init
const app = express()
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middlewares
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

// Routes
app.get('/', (req,res) => {
    res.json({"data": "Hello world"})
})

// Listening
app.listen(PORT, async () => {
    // DB config
    // await mongoose.connect('mongodb://127.0.0.1:27017/docker-test-db').then(()=>{
    await mongoose.connect(MONGO_URI).then(()=>{
        console.log(`DB connected !!!`);
    }).catch((err) => {
        console.log(`DB connection failed !!! - ${err}`);
    })
    console.log(`Server listening on ${PORT}`);
})