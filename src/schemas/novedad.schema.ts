import joi from 'joi'

//const id = joi.string().uuid();
//const name = joi.string().alphanum().min(3).max(15);
const id = joi.number();
const problemDate = joi.date();
const cid = joi.string();
const sitio = joi.string();
const description = joi.string();
// const severity = joi.string();
// const time_ = joi.number().strict();
const estado = joi.boolean();
// const host = joi.string();
// const problem = joi.string();
// const duration = joi.string();
const active = joi.boolean(); // →→ en MySql no
// const actions = joi.string();

const createSchema = joi.object({
  problemDate: problemDate,
  active: active,
  cid: cid.required(),
  sitio: sitio,
  description: description.required(),
  estado: estado
});

const updateSchema = joi.object({
  problemDate: problemDate,
  cid: cid,
  sitio: sitio,
  description: description,
  estado: estado.required()
});

const replaceSchema = joi.object({
  problemDate: problemDate,
  active: active.required(),
  cid: cid.required(),
  sitio: sitio,
  description: description.required(),
  estado: estado.required()
});

const getSchema = joi.object({
  id: id.required() //No utilizo number().strict() para que también valide params numbers como string: ("2" == 2) → True
});

const deleteSchema = joi.object({
  id: id.required() //No utilizo number().strict() para que también valide params numbers como string: ("2" == 2) → True
})


export default { createSchema, updateSchema, replaceSchema, getSchema, deleteSchema }
