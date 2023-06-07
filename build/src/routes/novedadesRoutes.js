"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESModules
// const express = require('expres') → Commonjs
const novedadesServices_1 = __importDefault(require("../services/novedadesServices"));
const router = express_1.default.Router();
const service = new novedadesServices_1.default();
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const novedades = yield service.find();
    res.json(novedades);
}));
router.get('/:id', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = _req.params;
    const novedad = yield service.findOne(id);
    if (novedad != null) {
        res.status(200).json(novedad);
    }
    else {
        res.status(404).json({
            message: 'not found'
        });
    }
}));
//parametros Query
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
}));
router.post('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = _req.body;
    const newNovedad = yield service.create(body);
    res.status(201).json(newNovedad);
}));
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const novedad = yield service.update(id, body);
        res.json(novedad);
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const respuesta = yield service.delete(id);
    res.json(respuesta);
}));
exports.default = router;
