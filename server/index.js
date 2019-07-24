const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 

app.get('/', (req, res) => {
    res.status(200).send('¡Hola Mundo!');
});

app.get('/api/v1/user', (req, res) => {
    res.status(200).send({
        "message": "ok",
        "users": ["Juan", "Paco", "Luis"],
    })
});

module.exports = { app, PORT };