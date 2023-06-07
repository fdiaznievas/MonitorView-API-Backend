import boom from '@hapi/boom'

function validatorHandler(schema:any, property:any, next:any) {
  return (req:any, _res:any, next:any) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if(error) {
      boom.badRequest(error)
    }
    next();
  }
}
