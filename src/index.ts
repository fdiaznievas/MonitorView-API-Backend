import express from 'express'; //ESModules
// const express = require('expres') → Commonjs

import novedadesRoutes from './routes/novedadesRoutes';
import endpointRoutes from './routes/endpointRoutes';
import contactosRoutes from './routes/contactosRoutes';
import usersRoutes from './routes/usersRoutes';
import indexRoutes from './routes/indexRoutes';
import zabbixRoutes from './routes/zabbixRoutes';

import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler';


const app = express();
const PORT = 3005;
const router = express.Router();

app.use(express.json()) //middleware que transforma la req.body a un json
app.use('/api/v1', router) //middleware (???)

// ***************** ENDPOINTS ***************** //

router.get('/', indexRoutes);
router.use('/novedades', novedadesRoutes);
router.use('/endpoint', endpointRoutes)
router.use('/contactos', contactosRoutes)
router.use('/zabbix-alerts', zabbixRoutes)
//parametros Query
router.use('/users', usersRoutes);

// ***************** /ENDPOINTS ***************** //


// ***************** MIDDLEWARES ORDENADOS DE FORMA SECUENCIAL *****************//
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
// ***************** /MIDDLEWARES ORDENADOS DE FORMA SECUENCIAL *****************//


app.listen(PORT, () => {
  console.log("Mi port " + PORT);
});
console.log("Hola wey");
