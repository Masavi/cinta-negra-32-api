const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const User = require('../models/User');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('¡Hola Mundo!');
});

app.post('/api/v1/user', (req, res) => {
    const newUser = new User(req.body);
          newUser.save()
                 .then( newUser => res.status(201).send(newUser))
                 .catch( err => res.status(400).send(err));
});

app.get('/api/v1/user', (req, res) => {
    User.find()
        .then( users => res.status(200).send(users))
        .catch( err => res.status(400).send(err));
});

module.exports = { app, PORT };