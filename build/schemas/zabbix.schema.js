"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
//const id = joi.string().uuid();
//const name = joi.string().alphanum().min(3).max(15);
const time_ = joi_1.default.number().strict();
const host = joi_1.default.string();
const severity = joi_1.default.string();
const status = joi_1.default.string().alphanum();
const problem = joi_1.default.string();
const duration = joi_1.default.string();
const ack = joi_1.default.string();
const actions = joi_1.default.string();
const createSchema = joi_1.default.object({
    severity: severity,
    time_: time_.required(),
    status: status,
    host: host.required(),
    problem: problem.required(),
    duration: duration,
    ack: ack,
    actions: actions
});
const updateSchema = joi_1.default.object({
    severity: severity,
    status: status,
    host: host,
    problem: problem,
    duration: duration,
    ack: ack,
    actions: actions
});
const replaceSchema = joi_1.default.object({
    severity: severity,
    status: status,
    host: host.required(),
    problem: problem.required(),
    duration: duration,
    ack: ack,
    actions: actions
});
const getSchema = joi_1.default.object({
    time: time_.required()
});
exports.default = { createSchema, updateSchema, replaceSchema, getSchema };
