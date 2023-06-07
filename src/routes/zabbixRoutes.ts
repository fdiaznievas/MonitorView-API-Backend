import express from 'express'; //ESModules
// const express = require('expres') → Commonjs
import ZabbixService from '../services/zabbixServices';


const router = express.Router();
const service = new ZabbixService();


router.get('/', async (_req, res) => {
  const zabbix = await service.find();
  res.json(zabbix);
})

router.get('/:timeId', async (_req, res, next) => {
  try {
    const { timeId } = _req.params;
    const zabbix = await service.findOne(timeId);
    res.json(zabbix)
  } catch (error) {
    next(error);
  }
})

//parametros Query
router.get('/', (req:any,res:any) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send("No se enviaron parámetros")
  }
})


router.post('/', async (req, res) => {
  const body = req.body;
  const newZabbixAlert = await service.create(body);
  res.status(201).json(newZabbixAlert)
});

router.patch('/:time', async (req, res) => {
  const { time } = req.params;
  const body = req.body;
  const alertaZabbix = await service.update(time, body);
  res.json(alertaZabbix);
})

router.delete('/:time', async (req, res) => {
  const { time } = req.params;
  const deleteAlert = await service.delete(time);
  res.json(deleteAlert)
})

export default router
