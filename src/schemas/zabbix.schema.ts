import joi from 'joi'

//const id = joi.string().uuid();
//const name = joi.string().alphanum().min(3).max(15);
const time_ = joi.number().strict();
const host = joi.string();
const severity = joi.string();
const status = joi.string().alphanum();
const problem = joi.string();
const duration = joi.string();
const ack = joi.string();
const actions = joi.string();

const createSchema = joi.object({
  severity: severity,
  time_: time_.required(),
  status: status,
  host: host.required(),
  problem: problem.required(),
  duration: duration,
  ack: ack,
  actions: actions
});

const updateSchema = joi.object({
  severity: severity,
  status: status,
  host: host,
  problem: problem,
  duration: duration,
  ack: ack,
  actions: actions
});

const replaceSchema = joi.object({
  severity: severity,
  status: status,
  host: host.required(),
  problem: problem.required(),
  duration: duration,
  ack: ack,
  actions: actions
});

const getSchema = joi.object({
  time: time_.required()
});


export default { createSchema, updateSchema, replaceSchema, getSchema }
