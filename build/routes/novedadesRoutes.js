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
const validator_handler_1 = require("../middlewares/validator.handler");
const novedad_schema_1 = __importDefault(require("../schemas/novedad.schema"));
const novedad_schema_2 = __importDefault(require("../schemas/novedad.schema"));
const novedad_schema_3 = __importDefault(require("../schemas/novedad.schema"));
const novedad_schema_4 = __importDefault(require("../schemas/novedad.schema"));
const router = express_1.default.Router();
const service = new novedadesServices_1.default();
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const novedades = yield service.find();
    res.json(novedades);
}));
router.get('/:id', (0, validator_handler_1.validatorHandler)(novedad_schema_3.default.getSchema, 'params'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const novedad = yield service.findOne(id);
        res.json(novedad);
    }
    catch (error) {
        next(error);
    }
}));
//parametros Query
// router.get('/', async (req:any,res:any) => {
//   const {limit, offset} = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     })
//   } else {
//     res.send("No se enviaron parámetros")
//   }
// })
router.post('/', (0, validator_handler_1.validatorHandler)(novedad_schema_1.default.createSchema, 'body'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const newNovedad = yield service.create(body);
        res.status(201).json(newNovedad);
    }
    catch (error) {
        next(error);
    }
}));
router.patch('/:id', (0, validator_handler_1.validatorHandler)(novedad_schema_3.default.getSchema, 'params'), (0, validator_handler_1.validatorHandler)(novedad_schema_2.default.updateSchema, 'body'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const novedad = yield service.update(id, body);
        res.json(novedad);
    }
    catch (error) {
        next(error);
    }
}));
// router.put('/:id',
//   validatorHandler(getSchema.getSchema, 'params'),
//   validatorHandler(replaceSchema.replaceSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const alertaZabbix = await service.replace(id, body);
//       res.json(alertaZabbix);
//     } catch(error) {
//       next(error)
//     }
//   }
// );
router.delete('/:id', (0, validator_handler_1.validatorHandler)(novedad_schema_4.default.deleteSchema, 'params'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteNovedad = yield service.delete(id);
        res.json(deleteNovedad);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
