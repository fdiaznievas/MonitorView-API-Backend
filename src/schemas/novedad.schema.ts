import joi from 'joi'

//const id = joi.string().uuid();
//const name = joi.string().alphanum().min(3).max(15);
const id = joi.number();
const caseId = joi.number();
const problemDate = joi.date();
const cid = joi.string();
const sitio = joi.string();
const description = joi.string();
// const severity = joi.string();
// const time_ = joi.number().strict();
// const status = joi.string().alphanum();
// const host = joi.string();
// const problem = joi.string();
// const duration = joi.string();
const active = joi.boolean(); // →→ en MySql no
// const actions = joi.string();

const createSchema = joi.object({
  caseId: caseId.required(),
  problemDate: problemDate,
  active: active,
  cid: cid.required(),
  sitio: sitio,
  description: description.required()
});

const updateSchema = joi.object({
  problemDate: problemDate,
  active: active.required(),
  cid: cid,
  sitio: sitio,
  description: description
});

const replaceSchema = joi.object({
  caseId: caseId.required(),
  problemDate: problemDate,
  active: active.required(),
  cid: cid.required(),
  sitio: sitio,
  description: description.required()
});

const getSchema = joi.object({
  id: id.required() //No utilizo number().strict() para que también valide params numbers como string: ("2" == 2) → True
});

const deleteSchema = joi.object({
  id: id.required() //No utilizo number().strict() para que también valide params numbers como string: ("2" == 2) → True
})


export default { createSchema, updateSchema, replaceSchema, getSchema, deleteSchema }
