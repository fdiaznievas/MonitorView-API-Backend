import express from 'express'; //ESModules
// const express = require('expres') → Commonjs

const router = express.Router();

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


router.post('/', (_req, res) => {
  res.send('Realizando POST')
})

export default router





