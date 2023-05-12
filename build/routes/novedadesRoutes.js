"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESModules
// const express = require('expres') → Commonjs
const novedadesServices_1 = __importDefault(require("../services/novedadesServices"));
const router = express_1.default.Router();
const service = new novedadesServices_1.default();
router.get('/', (_req, res) => {
    const novedades = service.find();
    res.json(novedades);
});
router.get('/:id', (_req, res) => {
    const { id } = _req.params;
    const novedad = service.findOne(id);
    if (novedad != null) {
        res.status(200).json(novedad);
    }
    else {
        res.status(404).json({
            message: 'not found'
        });
    }
});
router.post('/', (_req, res) => {
    const body = _req.body;
    res.status(201).json({
        message: 'created',
        data: body
    });
    res.send('Creando un Evento Novedad!');
});
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'updated',
        id,
        data: body
    });
    res.send('Actualizando parcialmente un Evento Novedad!');
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleted',
        id
    });
    res.send('Eliminando Evento Novedad!');
});
exports.default = router;
