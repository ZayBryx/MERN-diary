const Joi = require("joi");

const diaryValidationSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Title is required",
    "string.empty": "Title cannot be empty",
  }),
  content: Joi.string().min(3).messages({
    "any.required": "Content is required",
    "string.min": "Content must be at least 3 characters long",
    "string.empty": "Content cannot be empty",
  }),
  date: Joi.date().default(Date.now(), "current date").messages({
    "date.base": "Invalid date format.",
  }),
});

module.exports = diaryValidationSchema;
