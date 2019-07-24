const mongoose = require('mongoose');
const db_url = 'mongodb+srv://mau:abc123def456@testing-cluster-efwi5.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(
    db_url, 
    { useNewUrlParser: true },
    () => console.log('Conexión exitosa con base de datos'));