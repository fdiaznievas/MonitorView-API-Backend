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
const boom_1 = __importDefault(require("@hapi/boom"));
const sequelize_1 = __importDefault(require("../libs/sequelize"));
class NovedadesService {
    constructor() { }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newNovedad = yield sequelize_1.default.models.Novedad.create(data);
            return newNovedad;
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const rta = yield sequelize_1.default.models.Novedad.findAll();
            return rta;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield sequelize_1.default.models.Novedad.findByPk(id);
            if (!user) {
                throw boom_1.default.notFound('user not found');
            }
            return user;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOne(id);
            const rta = yield user.update(changes);
            return rta;
        });
    }
    // async replace(time:any, changes:any) {
    //   return
    // }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOne(id);
            yield user.destroy();
            return { id };
        });
    }
}
exports.default = NovedadesService;
