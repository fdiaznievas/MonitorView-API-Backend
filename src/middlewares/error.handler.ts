import { isBoom, Boom, boomify } from "@hapi/boom";

export function logErrors( err:any, _req:any, res:any, next:any) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

export function errorHandler( err:any, _req:any, res:any, next:any) {
  if (err.Boom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  res.send("No hay error")
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
