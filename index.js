const { app, PORT } = require('./server');
require('./database');

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));