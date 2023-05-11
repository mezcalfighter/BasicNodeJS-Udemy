const express = require('express');
const debug = require('debug')('app:server');

const {Config} = require('./src/config');

const app = express();

app.use(express.json());

app.listen(Config.port,()=>{
    debug(`Servidor escuchando en el puerto ${Config.port}`);
});