"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.boomErrorHandler = exports.logErrors = void 0;
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
function errorHandler(err, _req, res, next) {
    if (err.Boom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    res.send("No hay error");
}
exports.errorHandler = errorHandler;
