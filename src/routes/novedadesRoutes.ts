import express from 'express'; //ESModules
// const express = require('expres') → Commonjs
import NovedadesService from '../services/novedadesServices';

const router = express.Router();
const service = new NovedadesService();

router.get('/', async (_req, res) => {
  const novedades = await service.find();
  res.json(novedades);
})

router.get('/:id', async (_req, res) => {
  const { id } = _req.params;
  const novedad = await service.findOne(id);
  if(novedad != null) {
    res.status(200).json(novedad);
  } else {
    res.status(404).json({
      message: 'not found'
    })
  }
})

//parametros Query
router.get('/', async (req:any,res:any) => {
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


router.post('/', async (_req, res) => {
  const body = _req.body;
  const newNovedad = await service.create(body);
  res.status(201).json(newNovedad)
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const novedad = await service.update(id, body);
    res.json(novedad);
  } catch (error:any) {
    res.status(404).json({
      message: error.message
    })
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const respuesta = await service.delete(id);
  res.json(respuesta);
});

export default router
