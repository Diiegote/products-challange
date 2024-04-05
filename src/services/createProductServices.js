const { Product } = require("../schemas");
const ClientError = require("../utils/errors");

const createProductServices = async (body) => {
   const { nombre, precio, total_productos, imagen, descripcion, categoria, disponibilidad } = body;
   const newProduct = new Product(
      {
         nombre,
         precio: parseInt(precio),
         total_productos: parseInt(total_productos),
         imagen,
         descripcion,
         categoria,
         disponibilidad
      }
   );
   await newProduct.save();
   if (!newProduct) throw new ClientError('No se pudo crear el producto');
   return newProduct;
};

module.exports = createProductServices;

