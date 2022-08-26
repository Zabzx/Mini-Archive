import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const value = {
    userId: 213241,
    content: 'ayo'
}

app.get('/', (req, res) => {
    res.send(value)
})

app.get('/:id', (req, res) => {
    console.log(req.params)
}, []);

app.post('/', (req, res) => {
    console.log(req.body)
})

console.log(process.env.SOMETHING)

const db = mongoose.connection;
mongoose.connect(process.env.MONGO_DB_CONNECTION)
    .then(() => app.listen(5000, console.log('server running')));

db.once('open', () => console.log('connected to database'));