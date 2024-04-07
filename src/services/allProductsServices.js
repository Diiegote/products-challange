const { Product } = require("../schemas");
const ClientError = require("../utils/errors");


const allProductsServices = async (page, limit = 8, nombre, categoria) => {

   const products = await Product.find({
      categoria: { $regex: new RegExp(categoria, "i") },
      nombre: { $regex: new RegExp(nombre, "i") }
   })
      .skip((page - 1) * limit)
      .limit(limit);
   const totalProductos = await Product.countDocuments({
      categoria: { $regex: new RegExp(categoria, "i") },
      nombre: { $regex: new RegExp(nombre, "i") }
   });
   const totalPages = Math.ceil(totalProductos / limit);
   if (!products.length) throw new ClientError('No se encontro la categoria', 404);
   return { products, totalPages, totalProductos };

};

module.exports = allProductsServices;