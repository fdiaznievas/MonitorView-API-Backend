import joi from 'joi'

//const id = joi.string().uuid();
//const name = joi.string().alphanum().min(3).max(15);
const id = joi.number();
const severity = joi.string();
const time_ = joi.number().strict();
const status = joi.string().alphanum();
const host = joi.string();
const problem = joi.string();
const duration = joi.string();
const active = joi.boolean();
const actions = joi.string();

const createSchema = joi.object({
  severity: severity,
  time_: time_.required(),
  status: status,
  host: host.required(),
  problem: problem.required(),
  duration: duration,
  active: active,
  actions: actions
});

const updateSchema = joi.object({
  severity: severity,
  status: status,
  host: host,
  problem: problem,
  duration: duration,
  active: active,
  actions: actions
});

const replaceSchema = joi.object({
  severity: severity,
  status: status,
  host: host.required(),
  problem: problem.required(),
  duration: duration,
  active: active,
  actions: actions
});

const getSchema = joi.object({
  id: id.required() //No utilizo number().strict() para que también valide params numbers como string: ("2" == 2) → True
});


export default { createSchema, updateSchema, replaceSchema, getSchema }
