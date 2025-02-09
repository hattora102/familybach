const express = require('express');
const app = express();
const port = 3000;

let userRequests = {};

app.use(express.json());

app.post('/log-request', (req, res) => {
    const ip = req.body.ip;

    if (!userRequests[ip]) {
        userRequests[ip] = 0;
    }
    userRequests[ip]++;

    if (userRequests[ip] > 100) {
        return res.status(429).send('Слишком много запросов. Доступ временно заблокирован.');
    }

    res.send(`Запрос от ${ip}: ${userRequests[ip]} раз(а)`);
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
