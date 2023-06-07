"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntries = void 0;
const agenda_json_1 = __importDefault(require("./agenda.json"));
const agenda = agenda_json_1.default;
class ContactosService {
    constructor() {
        this.listContactos = agenda;
    }
    generate() {
    }
    create() {
    }
    find() {
        return this.listContactos;
    }
    findOne(id) {
        return this.listContactos.find(item => item.id == id);
    }
    update() {
    }
    delete() {
    }
}
exports.default = ContactosService;
const getEntries = () => agenda;
exports.getEntries = getEntries;
const addEntry = () => null;
exports.addEntry = addEntry;
