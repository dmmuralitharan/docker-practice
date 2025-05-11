import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

// Init
const app = express()
const PORT = 3000

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req,res) => {
    res.json({"data": "Hello world"})
})

// Listening
app.listen(PORT, async () => {
    // DB config
    await mongoose.connect('mongodb://127.0.0.1:27017/docker-test-db').then(()=>{
        console.log(`DB connected !!!`);
    }).catch((err) => {
        console.log(`DB connection failed !!! - ${err}`);
    })
    console.log(`Server listening on ${PORT}`);
})