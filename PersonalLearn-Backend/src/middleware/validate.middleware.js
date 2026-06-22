export const validate = (schema) => (req, res, next) => {
  // Simple validation middleware stub. You can use Joi or Zod later.
  // For now, we will do basic checking inside controllers or services.
  next();
};
