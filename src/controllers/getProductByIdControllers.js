const getProductByIdServices = require("../services/getProductByIdServices");
const response = require('../utils/response');

const getProductByIdControllers = async ({ params }, res) => {
   const { id } = params;
   const product = await getProductByIdServices(id);
   response(res, 201, product);
};

module.exports = getProductByIdControllers;