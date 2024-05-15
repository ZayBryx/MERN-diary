const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors/custom-error");

const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({
      error: { message: error.message },
    });
  }

  console.log(error);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: { message: "Someting when wrong please try again later" } });
};

module.exports = errorHandler;
