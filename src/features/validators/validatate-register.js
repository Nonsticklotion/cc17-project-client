import Joi from "joi";

const registerSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email address",
  }),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be at least 6 characters and contain only alphabet and number",
    }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "confirm password is required",
    "any.only": "password and confirm password did not match",
  }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(
    input,
    { abortEarly: false } //เช็คทุกตัว ถ้าเป็นtrueจะตรวจเจอแล้วจบการทำงาน
  );
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    console.dir(error);
    return result;
  }
};
export default validateRegister;
