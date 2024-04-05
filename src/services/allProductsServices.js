const { Product } = require("../schemas");
const ClientError = require("../utils/errors");


const allProductsServices = async (page, limit,nombre) => {
   const products = await Product.find({ nombre: { $regex: new RegExp(nombre, "i") } })
      .skip((page - 1) * limit)
      .limit(limit);
   if (!products.length) throw new ClientError('No se encontraron productos', 404);
   return products;
};

module.exports = allProductsServices;