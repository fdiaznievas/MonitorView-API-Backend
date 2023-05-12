import express from 'express'; //ESModules
// const express = require('expres') → Commonjs
import ContactosService from '../services/contactosServices';


const router = express.Router();
const service = new ContactosService();

router.get('/', (_req, res) => {
  const contactos = service.find();
  res.json(contactos)
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const contacto = service.findOne(id);
  if(contacto != null) {
    res.status(200).json(contacto);
  } else {
    res.status(404).json({
      message: 'not found'
    })
  }
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    id,
    data: body
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  })
})

export default router


