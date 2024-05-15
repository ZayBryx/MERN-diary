const CustomError = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");

const Validator = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      throw new CustomError(error.message, StatusCodes.BAD_REQUEST);
    }

    req.body = value;

    next();
  };
};
