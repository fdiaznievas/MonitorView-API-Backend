"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
//const id = joi.string().uuid();
//const name = joi.string().alphanum().min(3).max(15);
const id = joi_1.default.number();
const caseId = joi_1.default.number();
const problemDate = joi_1.default.date();
const cid = joi_1.default.string();
const sitio = joi_1.default.string();
const description = joi_1.default.string();
// const severity = joi.string();
// const time_ = joi.number().strict();
// const status = joi.string().alphanum();
// const host = joi.string();
// const problem = joi.string();
// const duration = joi.string();
const active = joi_1.default.boolean(); // →→ en MySql no
// const actions = joi.string();
const createSchema = joi_1.default.object({
    caseId: caseId.required(),
    problemDate: problemDate,
    active: active,
    cid: cid.required(),
    sitio: sitio,
    description: description.required()
});
const updateSchema = joi_1.default.object({
    problemDate: problemDate,
    active: active.required(),
    cid: cid,
    sitio: sitio,
    description: description
});
const replaceSchema = joi_1.default.object({
    caseId: caseId.required(),
    problemDate: problemDate,
    active: active.required(),
    cid: cid.required(),
    sitio: sitio,
    description: description.required()
});
const getSchema = joi_1.default.object({
    id: id.required() //No utilizo number().strict() para que también valide params numbers como string: ("2" == 2) → True
});
const deleteSchema = joi_1.default.object({
    id: id.required() //No utilizo number().strict() para que también valide params numbers como string: ("2" == 2) → True
});
exports.default = { createSchema, updateSchema, replaceSchema, getSchema, deleteSchema };
