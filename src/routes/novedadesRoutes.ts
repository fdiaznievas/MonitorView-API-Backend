import express from 'express'; //ESModules
// const express = require('expres') → Commonjs
import NovedadesService from '../services/novedadesServices';

import { validatorHandler } from '../middlewares/validator.handler';
import createSchema from '../schemas/novedad.schema';
import updateSchema from '../schemas/novedad.schema';
import getSchema from '../schemas/novedad.schema';
import replaceSchema from '../schemas/novedad.schema';
import deleteSchema from '../schemas/novedad.schema';

const router = express.Router();
const service = new NovedadesService();

router.get('/', async (_req, res) => {
  const novedades = await service.find();
  res.json(novedades);
})

router.get('/:id',
  validatorHandler(getSchema.getSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const novedad = await service.findOne(id);
      res.json(novedad)
    } catch (error) {
      next(error);
    }
  }
);

//parametros Query
// router.get('/', async (req:any,res:any) => {
//   const {limit, offset} = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     })
//   } else {
//     res.send("No se enviaron parámetros")
//   }
// })


router.post('/',
  validatorHandler(createSchema.createSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newNovedad = await service.create(body);
      res.status(201).json(newNovedad)
    } catch(error) {
      next(error)
    }
  }
);

router.patch('/:id',
  validatorHandler(getSchema.getSchema, 'params'),
  validatorHandler(updateSchema.updateSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const novedad = await service.update(id, body);
      res.json(novedad);
    } catch(error) {
      next(error)
    }
  }
);

// router.put('/:id',
//   validatorHandler(getSchema.getSchema, 'params'),
//   validatorHandler(replaceSchema.replaceSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const alertaZabbix = await service.replace(id, body);
//       res.json(alertaZabbix);
//     } catch(error) {
//       next(error)
//     }
//   }
// );

router.delete('/:id',
  validatorHandler(deleteSchema.deleteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteNovedad = await service.delete(id);
      res.json(deleteNovedad);
    } catch (error) {
      next(error);
    }
  }
);

export default router
