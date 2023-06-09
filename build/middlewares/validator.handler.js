"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorHandler = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
function validatorHandler(schema, property) {
    //Construye un middleware de forma dinámica porque retorna un middleware con la arrow function utilizando closures de javascript
    return (req, _res, next) => {
        //La información puede venir de distintos lugares dependiendo el request (get, post, put...)
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            next(boom_1.default.badRequest(error));
        }
        next();
    };
}
exports.validatorHandler = validatorHandler;
