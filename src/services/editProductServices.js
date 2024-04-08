const getProductByIdControllers = require("../controllers/getProductByIdControllers");
const { Product } = require("../schemas");
const ClientError = require("../utils/errors");


const editProductServices = async (id, body) => {
   const { nombre, precio, total_productos, imagen, descripcion, categoria, disponibilidad } = body;
   const product = await getProductByIdControllers(id);
   const editProduct = await Product.findByIdAndUpdate(id, {
      nombre: nombre ? nombre : product.data.nombre,
      precio: precio ? precio : product.data.precio,
      total_productos: total_productos ? total_productos : product.data.total_productos,
      imagen: imagen ? imagen : product.data.imagen,
      descripcion: descripcion ? descripcion : product.data.descripcion,
      categoria: categoria ? categoria : product.data.categoria,
      disponibilidad: disponibilidad ? disponibilidad : product.data.disponibilidad,
   }, { new: true })
   if (!editProduct) throw new ClientError('No se encontro el producto', 404);
   return editProduct;
};
module.exports = editProductServices;