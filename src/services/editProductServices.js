const getProductByIdControllers = require("../controllers/getProductByIdControllers");
const { Product } = require("../schemas");
const ClientError = require("../utils/errors");


const editProductServices = async (id, body) => {
   const { nombre, precio, total_productos, imagen, descripcion, categoria, disponibilidad } = body;
   const product = await getProductByIdControllers(id);
   const editProduct = await Product.findByIdAndUpdate(id, {
      nombre: nombre ? nombre : product.nombre,
      precio: precio ? precio : product.precio,
      total_productos: total_productos ? total_productos : product.total_productos,
      imagen: imagen ? imagen : product.imagen,
      descripcion: descripcion ? descripcion : product.descripcion,
      categoria: categoria ? categoria : product.categoria,
      disponibilidad: disponibilidad ? disponibilidad : product.disponibilidad,
   }, { new: true })
   if (!editProduct) throw new ClientError('No se encontro el producto', 404);
   return editProduct;
};
module.exports = editProductServices;