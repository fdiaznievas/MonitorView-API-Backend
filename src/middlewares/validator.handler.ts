import boom from '@hapi/boom'

export function validatorHandler(schema:any, property:any) {

  //Construye un middleware de forma dinámica porque retorna un middleware con la arrow function utilizando closures de javascript
  return (req:any, _res:any, next:any) => {
    //La información puede venir de distintos lugares dependiendo el request (get, post, put...)
    const data = req[property];
    console.log(schema)
    const { error } = schema.validate(data);
    if(error) {
      next(boom.badRequest(error))
    }
    next();
  }
}
