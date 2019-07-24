const { app, PORT } = require('./server');

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));