"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESModules
// const express = require('expres') → Commonjs
const contactosServices_1 = __importDefault(require("../services/contactosServices"));
const router = express_1.default.Router();
const service = new contactosServices_1.default();
router.get('/', (_req, res) => {
    const contactos = service.find();
    res.json(contactos);
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const contacto = service.findOne(id);
    if (contacto != null) {
        res.status(200).json(contacto);
    }
    else {
        res.status(404).json({
            message: 'not found'
        });
    }
});
router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
        message: 'created',
        data: body
    });
});
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'updated',
        id,
        data: body
    });
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleted',
        id
    });
});
exports.default = router;
