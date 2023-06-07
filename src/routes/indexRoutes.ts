import express from 'express'; //ESModules
// const express = require('expres') → Commonjs

const router = express.Router();

router.get('/', (_req, res) => {
  res.send("Este endpoint es el Index")
})

export default router
