const { Product } = require("../schemas");
const ClientError = require("../utils/errors");


const allProductsServices = async (page, limit = 8, nombre, categoria) => {
   if (categoria) {
      const products = await Product.find({ categoria: { $regex: new RegExp(categoria, "i") } })
         .skip((page - 1) * limit)
         .limit(limit);
      console.log(categoria);
      const totalProductos = await Product.countDocuments({ categoria: { $regex: new RegExp(categoria, "i") } });
      console.log(totalProductos);
      const totalPages = Math.ceil(totalProductos / limit);
      if (!products.length) throw new ClientError('No se encontro la categoria', 404);
      return { products, totalPages, totalProductos };
   }
   const products = await Product.find({ nombre: { $regex: new RegExp(nombre, "i") } })
      .skip((page - 1) * limit)
      .limit(limit);
   const totalProductos = await Product.countDocuments({ nombre: { $regex: new RegExp(nombre, "i") } });
   const totalPages = Math.ceil(totalProductos / limit);
   if (!products.length) throw new ClientError('No se encontraron productos', 404);
   return { products, totalProductos, totalPages };
};

module.exports = allProductsServices;