const { Product } = require("../schemas");
const ClientError = require("../utils/errors");


const allCategoriesServices = async (categoria) => {
   const allCategories = await Product.find({ categoria: { $regex: new RegExp(categoria, "i") } })
   if (!allCategories.length) throw new ClientError('No se encontro la categoria', 404);
   return allCategories;
};

module.exports = allCategoriesServices;