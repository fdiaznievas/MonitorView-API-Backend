"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.sequelizeErrorHandler = exports.boomErrorHandler = exports.logErrors = void 0;
const sequelize_1 = require("sequelize");
function logErrors(err, _req, res, next) {
    console.log('logErrors: Ejecutando error.handler.ts');
    console.error(err);
    next(err);
}
exports.logErrors = logErrors;
function boomErrorHandler(err, _req, res, next) {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload); // Información del Error output.payload
    }
    // ↓ Con esto ↓ corrijo el error: "cannot set headers after they are sent to the client"
    else {
        next(err);
    }
}
exports.boomErrorHandler = boomErrorHandler;
function sequelizeErrorHandler(err, req, res, next) {
    if (err instanceof sequelize_1.ValidationError) {
        res.status(409).json({
            statusCode: 409,
            name: err.name,
            errors: err.errors
        });
    }
    else {
        next(err);
    }
}
exports.sequelizeErrorHandler = sequelizeErrorHandler;
function errorHandler(err, _req, res, next) {
    if (err.Boom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    res.send("No hay error [errorHandler]");
}
exports.errorHandler = errorHandler;
