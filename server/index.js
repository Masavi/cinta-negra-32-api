const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

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