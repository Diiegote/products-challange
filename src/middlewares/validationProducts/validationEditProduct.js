const { body } = require("express-validator");

const validateEditProduct = [
   body("nombre", "El nombre debe contener al menos 4 caracteres").optional().trim().isString().isLength({ min: 4 }),
   body("precio", "El precio es requerido").optional(),
   body("total_productos", "El total de los productos es requerido").optional(),
   body("imagen", "proporciona una imagen valida").optional().isString().isLength({ min: 6 }),
   body("descripcion", "la descripcion debe contener al menos 4 caracteres").optional().trim().isString().isLength({ min: 4 }),
   body("categoria", "La categoria debe contener al menos 4 caracteres").optional().trim().isString().isLength({ min: 4 }),
   body("disponibilidad", "La disponibilidad debe ser un booleano").optional().isBoolean(),
];
module.exports = validateEditProduct;