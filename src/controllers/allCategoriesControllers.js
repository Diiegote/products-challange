const allCategoriesServices = require("../services/allCategriesServices");
const response = require("../utils/response");

const allCategoriesControllers = async ({ query }, res) => {
   const { categorias } = query;
   const allCategories = await allCategoriesServices(categorias);
   response(res, 201, allCategories);
};

module.exports = allCategoriesControllers;