"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESModules
// const express = require('expres') → Commonjs
const router = express_1.default.Router();
//parametros Query
router.get('/', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    }
    else {
        res.send("No se enviaron parámetros");
    }
});
router.post('/', (_req, res) => {
    res.send('Realizando POST');
});
exports.default = router;
