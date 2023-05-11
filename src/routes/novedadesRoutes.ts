import express from 'express'; //ESModules
// const express = require('expres') → Commonjs

const router = express.Router();

router.get('/', (_req, res) => {
  res.send("Fetching all entry diaries")
})

router.post('/', (_req, res) => {
  res.send('saving a diary!')
})

export default router
