"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string().uuid();
const name = joi_1.default.string().alphanum().min(3).max(15);
const time = joi_1.default.number();
const createSchema = joi_1.default.object({
    name: name.required(),
    time: time.required()
});
const updateSchema = joi_1.default.object({
    name: name.required(),
    time: time.required()
});
const getSchema = joi_1.default.object({
    time: time.required()
});
exports.default = { createSchema, updateSchema, getSchema };
