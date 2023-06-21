"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
//const id = joi.string().uuid();
//const name = joi.string().alphanum().min(3).max(15);
const id = joi_1.default.number();
const severity = joi_1.default.string();
const time_ = joi_1.default.number().strict();
const status = joi_1.default.string().alphanum();
const host = joi_1.default.string();
const problem = joi_1.default.string();
const duration = joi_1.default.string();
const active = joi_1.default.boolean();
const actions = joi_1.default.string();
const createSchema = joi_1.default.object({
    severity: severity,
    time_: time_.required(),
    status: status,
    host: host.required(),
    problem: problem.required(),
    duration: duration,
    active: active,
    actions: actions
});
const updateSchema = joi_1.default.object({
    severity: severity,
    status: status,
    host: host,
    problem: problem,
    duration: duration,
    active: active,
    actions: actions
});
const replaceSchema = joi_1.default.object({
    severity: severity,
    status: status,
    host: host.required(),
    problem: problem.required(),
    duration: duration,
    active: active,
    actions: actions
});
const getSchema = joi_1.default.object({
    id: id.required() //No utilizo number().strict() para que también valide params numbers como string: ("2" == 2) → True
});
exports.default = { createSchema, updateSchema, replaceSchema, getSchema };
