import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import bookRouter from './routes/book.route.js';
import userRouter from './routes/user.route.js';

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config();

const PORT = process.env.PORT || 3001
const URI = process.env.URI

// connect to mongodb
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Connected to MongoDB")
} catch (error) {
    console.log("Error: ", error)
}

// defining routes

app.use('/book', bookRouter)
app.use('/user', userRouter)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})