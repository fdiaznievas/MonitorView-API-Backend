"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntries = void 0;
const novedades_json_1 = __importDefault(require("./novedades.json"));
const novedades = novedades_json_1.default;
const getEntries = () => novedades;
exports.getEntries = getEntries;
const addEntry = () => null;
exports.addEntry = addEntry;
