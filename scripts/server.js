const express = require('express');
const helmet = require('helmet');
const rateLimit = require('rate-limit-express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100,
    message: 'Слишком много запросов с этого IP, попробуйте позже.'
});

app.use(limiter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
    const data = { message: 'Это данные с сервера' };
    res.json(data);
});

app.post('/api/data', (req, res) => {
    const receivedData = req.body;
    console.log(receivedData);
    res.status(201).send('Данные получены');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
