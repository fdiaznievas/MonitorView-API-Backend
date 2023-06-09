"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
//const id = joi.string().uuid();
//const name = joi.string().alphanum().min(3).max(15);
const id = joi_1.default.number();
const idCid = joi_1.default.number();
const sucursal = joi_1.default.string().alphanum();
const funcion = joi_1.default.string();
const apellido = joi_1.default.string();
const nombre = joi_1.default.string();
const celular = joi_1.default.string();
const interno = joi_1.default.number();
const createSchema = joi_1.default.object({
    id: id.required(),
    idCid: idCid.required(),
    sucursal: sucursal,
    funcion: funcion,
    apellido: apellido,
    nombre: nombre,
    celular: celular,
    interno: interno
});
const updateSchema = joi_1.default.object({
    id: id.required(),
    idCid: idCid.required(),
    sucursal: sucursal,
    funcion: funcion,
    apellido: apellido,
    nombre: nombre,
    celular: celular,
    interno: interno
});
const getSchema = joi_1.default.object({
    id: id.required()
});
exports.default = { createSchema, updateSchema, getSchema };
