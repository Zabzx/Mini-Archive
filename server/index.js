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

const db = mongoose.connection;
mongoose.connect("mongodb+srv://zabz:zabz@cluster0.ecez2ps.mongodb.net/?retryWrites=true&w=majority")
    .then(() => app.listen(5000, console.log('server running')));

db.once('open', () => console.log('connected to database'));