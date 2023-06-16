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
const novedades_json_1 = __importDefault(require("./novedades.json"));
const postgres_pool_1 = require("../libs/postgres.pool");
const novedades = novedades_json_1.default;
class NovedadesService {
    constructor() {
        this.listNovedades = novedades;
        this.pool = postgres_pool_1.pool;
        this.generate();
    }
    generate() {
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newNovedad = Object.assign({}, data);
            this.listNovedades.push(newNovedad);
            return newNovedad;
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * from zabbix';
            const rta = yield this.pool.query(query);
            return rta.rows;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.listNovedades.find(item => item.id == id);
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.listNovedades.findIndex(item => item.id == id);
            if (index === -1) {
                throw new Error('Evento no encontrado');
            }
            else {
                const objNovedad = this.listNovedades[index];
                this.listNovedades[index] = Object.assign(Object.assign({}, objNovedad), changes);
            }
            ;
            return this.listNovedades[index];
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.listNovedades.findIndex(item => item.id == id);
            if (index === -1) {
                throw new Error('Evento no encontrado');
            }
            this.listNovedades.splice(index, 1);
            return { id };
        });
    }
}
exports.default = NovedadesService;
