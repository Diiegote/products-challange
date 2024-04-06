const { Product } = require("../schemas");
const ClientError = require("../utils/errors");


const allProductsServices = async (page, limit = 8, nombre) => {
   const products = await Product.find({ nombre: { $regex: new RegExp(nombre, "i") } })
      .skip((page - 1) * limit)
      .limit(limit);
   const totalProductos = await Product.countDocuments({ nombre: { $regex: new RegExp(nombre, "i") } });
   const totalPages = Math.ceil(totalProductos / limit);
   if (!products.length) throw new ClientError('No se encontraron productos', 404);
   return { products, totalProductos, totalPages };
};

module.exports = allProductsServices;