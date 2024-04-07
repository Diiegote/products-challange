const { body } = require("express-validator");

const validateEditProduct = [
   body("nombre", "El nombre debe ser una cadena de texto").optional().trim().isString(),
   body("imagen", "proporciona una imagen valida").optional().isString(),
   body("descripcion", "la descripcion debe ser una cadena de texto").optional().trim().isString(),
   body("categoria", "La categoria debe ser una cadena de texto").optional().trim().isString(),
   body("disponibilidad", "La disponibilidad debe ser un booleano").optional().isBoolean(),
];
module.exports = validateEditProduct;