const { Product } = require("../schemas");
const ClientError = require("../utils/errors");


const allCategoriesServices = async (page, limit = 8, categoria) => {
   const products = await Product.find({ categoria: { $regex: new RegExp(categoria, "i") } })
      .skip((page - 1) * limit)
      .limit(limit);
   console.log(categoria);
   const totalProductos = await Product.countDocuments({ categoria: { $regex: new RegExp(categoria, "i") } });
   console.log(totalProductos);
   const totalPages = Math.ceil(totalProductos / limit);
   if (!products.length) throw new ClientError('No se encontro la categoria', 404);
   return { products, totalPages, totalProductos };
};

module.exports = allCategoriesServices;