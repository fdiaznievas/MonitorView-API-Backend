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
// import zabbixDatos from './zabbix.json';
const boom_1 = __importDefault(require("@hapi/boom"));
const sequelize_1 = __importDefault(require("../libs/sequelize"));
class ZabbixService {
    constructor() {
        this.generate();
    }
    generate() {
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield sequelize_1.default.models.Zabbix.create(data);
            console.log("Ejecutando create en zabbixServices.ts");
            return newUser;
            // ↓↓ TODO ESTO SE APLICABA ANTES DE SEQUELIZE ↓↓
            // const newZabbixAlert= {
            //   ... data
            // }
            // this.listZabbix.push(newZabbixAlert);
            // return newZabbixAlert;
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const rta = yield sequelize_1.default.models.Zabbix.findAll();
            return rta;
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
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield sequelize_1.default.models.Zabbix.findByPk(id);
            if (!user) {
                throw boom_1.default.notFound('user not found');
            }
            return user;
            // console.log("Ejecutando findOne en zabbixServices.ts")
            // const parseTime = Number(time)
            // const alertaZabbix:Object | undefined = await this.listZabbix.find(item => item.time === parseTime);
            // if (alertaZabbix == null) {
            //   throw boom.notFound('Alerta Zabbix NO encontrada!');
            // }
            // else {
            //   return alertaZabbix;
            // }
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOne(id);
            const rta = yield user.update(changes);
            return rta;
            // console.log("Ejecutando update en zabbixServices.ts")
            // const parseTime:number = Number(time)
            // const index = await this.listZabbix.findIndex(item => item.time === parseTime);
            // if (index === -1) {
            //   throw boom.notFound('Novedad no existe')
            // }
            // else {
            //   const objNovedad = this.listZabbix[index];
            //   this.listZabbix[index] = {
            //     ...objNovedad,
            //     ...changes
            //   };
            // };
            // return this.listZabbix[index];
        });
    }
    // async replace(time:any, changes:any) {
    //   console.log("Ejecutando replace en zabbixServices.ts")
    //   const parseTime:number = Number(time)
    //   const index = await this.listZabbix.findIndex(item => item.time === parseTime);
    //   if (index === -1) {
    //     throw boom.notFound('Novedad no existe')
    //   }
    //   else {
    //     const objNovedad = this.listZabbix[index];
    //     this.listZabbix[index] = {
    //       "time": parseTime,
    //       ...changes
    //     };
    //   };
    //   return this.listZabbix[index];
    // }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOne(id);
            yield user.destroy();
            return { id };
            // const index = await this.listZabbix.findIndex(item => item.time == time);
            // console.log("Ejecutando delete en zabbixServices.ts")
            // if (index === -1) {
            //   throw boom.notFound("Alerta no encontrada")
            // }
            // this.listZabbix.splice(index,1)
            // return { time };
        });
    }
}
exports.default = ZabbixService;
