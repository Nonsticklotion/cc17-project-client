import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(
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
export default validateLogin;
