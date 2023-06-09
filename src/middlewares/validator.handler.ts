import boom from '@hapi/boom'

export function validatorHandler(schema:any, property:string) {

  //Construye un middleware de forma dinámica porque retorna un middleware con la arrow function utilizando closures de javascript
  return (req:any, _res:object, next:Function) => {
    //La información puede venir de distintos lugares dependiendo el request (get, post, put...)
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if(error) {
      next(boom.badRequest(error))
    }
    next();
  }
}
