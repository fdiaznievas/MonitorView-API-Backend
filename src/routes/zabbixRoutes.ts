import express from 'express'; //ESModules
// const express = require('expres') → Commonjs
import ZabbixService from '../services/zabbixServices';

import { validatorHandler } from '../middlewares/validator.handler';
import createSchema from '../schemas/zabbix.schema'
import updateSchema from '../schemas/zabbix.schema'
import getSchema from '../schemas/zabbix.schema'
import replaceSchema from '../schemas/zabbix.schema'
import deleteSchema from '../schemas/zabbix.schema'

const router = express.Router();
const service = new ZabbixService();

router.get('/', async (_req, res) => {
  const zabbix = await service.find();
  res.json(zabbix);
})

router.get('/:id',
  validatorHandler(getSchema.getSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const zabbix = await service.findOne(id);
      res.json(zabbix)
    } catch (error) {
      next(error);
    }
  }
);

//parametros Query
// router.get('/', (req:any,res:any) => {
//   const {limit, offset} = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     })
//   } else {
//     res.send("No se enviaron parámetros")
//   }
// });


router.post('/',
  validatorHandler(createSchema.createSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newZabbixAlert = await service.create(body);
      res.status(201).json(newZabbixAlert)
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
      const alertaZabbix = await service.update(id, body);
      res.json(alertaZabbix);
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
      const deleteAlert = await service.delete(id);
      res.json(deleteAlert);
    } catch (error) {
      next(error);
    }
  }
);

export default router
