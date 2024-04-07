const createProductServices = require("../services/createProductServices");
const response = require('../utils/response');

const createProductControllers = async ({ body }, res) => {
   const newProduct = await createProductServices(body);
   response(res, 201, newProduct);
};

module.exports = createProductControllers;