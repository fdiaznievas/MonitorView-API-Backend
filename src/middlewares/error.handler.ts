import { isBoom, Boom, boomify } from "@hapi/boom";
import { ValidationError } from "sequelize";

export function logErrors( err:any, _req:any, res:any, next:any) {
  console.log('logErrors: Ejecutando error.handler.ts');
  console.error(err);
  next(err);
}

export function boomErrorHandler( err:any, _req:any, res:any, next:any) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload); // Información del Error output.payload

  }
  // ↓ Con esto ↓ corrijo el error: "cannot set headers after they are sent to the client"
  else {
    next(err);
  }
}

export function sequelizeErrorHandler(err:any, req:any, res:any, next:any) {
  if(err instanceof ValidationError) {
    res.status(409).json({
        statusCode: 409,
        name: err.name,
        errors: err.errors
    });
  } else {
    next(err);
  }
}

export function errorHandler( err:any, _req:any, res:any, next:any) {
  if (err.Boom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  res.send("No hay error [errorHandler]")
}
