const { body } = require("express-validator");

const validateCreateProduct = [
   body("nombre", "El nombre es requerido").trim().notEmpty().isString(),
   body("precio", "El precio es requerido").notEmpty(),
   body("total_productos", "El total de los productos es requerido").notEmpty(),
   body("imagen", "la imgagen es requerida").isString().notEmpty(),
   body("descripcion", "la descripcion es requerida").trim().notEmpty().isString(),
   body("categoria", "La categoria es requerida").trim().notEmpty().isString(),
   body("disponibilidad", "La disponibilidad es requerida").isBoolean(),
];
module.exports = validateCreateProduct;