const { validationResult } = require("express-validator");
const ClientError = require("../utils/errors")

const validationResultExpress = (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      throw new ClientError(errors.errors.map(err => err.msg), 401);
   }
   next();
};
module.exports = validationResultExpress;