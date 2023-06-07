"use strict";
function validatorHandler(schema, property, next) {
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data);
        if (error) {
            next(boom.badRequest(error));
        }
        next();
    };
}
