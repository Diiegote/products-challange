const allCategoriesServices = require("../services/allCategriesServices");
const response = require("../utils/response");

const allCategoriesControllers = async ({ query }, res) => {
   const { pages, limit, categoria } = query;
   const allCategories = await allCategoriesServices(pages, limit, categoria);
   response(res, 201, allCategories);
};

module.exports = allCategoriesControllers;