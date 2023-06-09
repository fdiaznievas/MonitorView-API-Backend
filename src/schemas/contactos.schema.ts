import joi from 'joi'

//const id = joi.string().uuid();
//const name = joi.string().alphanum().min(3).max(15);
const id = joi.number();
const idCid = joi.number();
const sucursal = joi.string().alphanum();
const funcion = joi.string();
const apellido = joi.string();
const nombre = joi.string();
const celular = joi.string();
const interno = joi.number();


const createSchema = joi.object({
  id: id.required(),
  idCid: idCid.required(),
  sucursal: sucursal,
  funcion: funcion,
  apellido: apellido,
  nombre: nombre,
  celular: celular,
  interno: interno
});

const updateSchema = joi.object({
  id: id.required(),
  idCid: idCid.required(),
  sucursal: sucursal,
  funcion: funcion,
  apellido: apellido,
  nombre: nombre,
  celular: celular,
  interno: interno
});

const getSchema = joi.object({
  id: id.required()
});


export default { createSchema, updateSchema, getSchema }
