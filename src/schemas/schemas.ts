import joi from 'joi'

const id = joi.string().uuid();
const name = joi.string().alphanum().min(3).max(15);
const time = joi.number();

const createSchema = joi.object({
  name: name.required(),
  time: time.required()
});

const updateSchema = joi.object({
  name: name.required(),
  time: time.required()
});

const getSchema = joi.object({
  time: time.required()
});


export default { createSchema, updateSchema, getSchema }
