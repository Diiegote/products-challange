const allProductsServices = require("../services/allProductsServices");
const response = require("../utils/response");


const allProductsControllers = async ({ query }, res) => {
   const { page, limit, nombre } = query;
   const products = await allProductsServices(page, limit, nombre);
   response(res, 201, products);
};

module.exports = allProductsControllers;