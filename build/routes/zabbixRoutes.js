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
const zabbixServices_1 = __importDefault(require("../services/zabbixServices"));
const validator_handler_1 = require("../middlewares/validator.handler");
const zabbix_schema_1 = __importDefault(require("../schemas/zabbix.schema"));
const zabbix_schema_2 = __importDefault(require("../schemas/zabbix.schema"));
const zabbix_schema_3 = __importDefault(require("../schemas/zabbix.schema"));
const zabbix_schema_4 = __importDefault(require("../schemas/zabbix.schema"));
const router = express_1.default.Router();
const service = new zabbixServices_1.default();
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const zabbix = yield service.find();
    res.json(zabbix);
}));
router.get('/:time', (0, validator_handler_1.validatorHandler)(zabbix_schema_3.default.getSchema, 'params'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Ejecuto middleware .get de zabbixRoutes");
        const { time } = req.params;
        const zabbix = yield service.findOne(time);
        res.json(zabbix);
    }
    catch (error) {
        next(error);
    }
}));
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
router.post('/', (0, validator_handler_1.validatorHandler)(zabbix_schema_1.default.createSchema, 'body'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const newZabbixAlert = yield service.create(body);
    res.status(201).json(newZabbixAlert);
}));
router.patch('/:time', (0, validator_handler_1.validatorHandler)(zabbix_schema_3.default.getSchema, 'params'), (0, validator_handler_1.validatorHandler)(zabbix_schema_2.default.updateSchema, 'body'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { time } = req.params;
        const body = req.body;
        const alertaZabbix = yield service.update(time, body);
        res.json(alertaZabbix);
    }
    catch (error) {
        next(error);
    }
}));
router.put('/:time', (0, validator_handler_1.validatorHandler)(zabbix_schema_3.default.getSchema, 'params'), (0, validator_handler_1.validatorHandler)(zabbix_schema_4.default.replaceSchema, 'body'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { time } = req.params;
        const body = req.body;
        const alertaZabbix = yield service.replace(time, body);
        res.json(alertaZabbix);
    }
    catch (error) {
        next(error);
    }
}));
router.delete('/:time', 
//validatorHandler(deleteSchema.deleteSchema, 'params')
(req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { time } = req.params;
        const deleteAlert = yield service.delete(time);
        res.json(deleteAlert);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
