const { Product } = require("../schemas");
const ClientError = require("../utils/errors");


const editProductServices = async (id, body) => {
   const editProduct = await Product.findByIdAndUpdate(id, body, { new: true })
   if (!editProduct) throw new ClientError('No se encontro el producto', 404);
   return editProduct;
};
module.exports = editProductServices;