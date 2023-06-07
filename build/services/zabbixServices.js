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
const zabbix_json_1 = __importDefault(require("./zabbix.json"));
const boom_1 = __importDefault(require("@hapi/boom"));
const zabbix = zabbix_json_1.default;
class ZabbixService {
    constructor() {
        this.listZabbix = zabbix;
        this.generate();
    }
    generate() {
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newZabbixAlert = Object.assign({}, data);
            this.listZabbix.push(newZabbixAlert);
            return newZabbixAlert;
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, _reject) => {
                setTimeout(() => {
                    resolve(this.listZabbix);
                }, 100);
            });
        });
    }
    findOne(time) {
        return __awaiter(this, void 0, void 0, function* () {
            const parseTime = Number(time);
            const alertaZabbix = yield this.listZabbix.find(item => item.Time === parseTime);
            console.log("alertaZabbix es tipo:", typeof (alertaZabbix));
            console.log("Jujuuu el profe Guss");
            if (alertaZabbix == null) {
                throw boom_1.default.notFound('Alerta Zabbix NO encontrada!');
            }
            else {
                return alertaZabbix;
            }
        });
    }
    update(time, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const parseTime = Number(time);
            const index = yield this.listZabbix.findIndex(item => item.Time === parseTime);
            if (index === -1) {
                throw boom_1.default.notFound('Novedad no existe');
            }
            else {
                const objNovedad = this.listZabbix[index];
                this.listZabbix[index] = Object.assign(Object.assign({}, objNovedad), changes);
            }
            ;
            return this.listZabbix[index];
        });
    }
    delete(time) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = yield this.listZabbix.findIndex(item => item.Time == time);
            if (index === -1) {
                throw boom_1.default.notFound("Alerta no encontrada");
            }
            this.listZabbix.splice(index, 1);
            return { time };
        });
    }
}
exports.default = ZabbixService;
