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
const sequelize_1 = require("../libs/sequelize");
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
            console.log("Ejecutando create en zabbixServices.ts");
            const newZabbixAlert = Object.assign({}, data);
            this.listZabbix.push(newZabbixAlert);
            return newZabbixAlert;
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * from zabbix';
            const [data] = yield sequelize_1.sequelize.query(query);
            return data;
        });
    }
    // {
    //   console.log("Ejecutando find en zabbixServices.ts")
    //   return new Promise( (resolve, _reject) => {
    //     setTimeout( () => {
    //       resolve(this.listZabbix);
    //     }, 100);
    //     console.log("Se ejecutó un setTimeout")
    //   })
    // }
    findOne(time) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Ejecutando findOne en zabbixServices.ts");
            const parseTime = Number(time);
            const alertaZabbix = yield this.listZabbix.find(item => item.time === parseTime);
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
            console.log("Ejecutando update en zabbixServices.ts");
            const parseTime = Number(time);
            const index = yield this.listZabbix.findIndex(item => item.time === parseTime);
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
    replace(time, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Ejecutando replace en zabbixServices.ts");
            const parseTime = Number(time);
            const index = yield this.listZabbix.findIndex(item => item.time === parseTime);
            if (index === -1) {
                throw boom_1.default.notFound('Novedad no existe');
            }
            else {
                const objNovedad = this.listZabbix[index];
                this.listZabbix[index] = Object.assign({ "time": parseTime }, changes);
            }
            ;
            return this.listZabbix[index];
        });
    }
    delete(time) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = yield this.listZabbix.findIndex(item => item.time == time);
            console.log("Ejecutando delete en zabbixServices.ts");
            if (index === -1) {
                throw boom_1.default.notFound("Alerta no encontrada");
            }
            this.listZabbix.splice(index, 1);
            return { time };
        });
    }
}
exports.default = ZabbixService;
