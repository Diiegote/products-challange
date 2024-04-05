const { Schema } = require("mongoose");


const productSchema = new Schema({
    nombre: String,
    precio: Number,
    total_productos: Number,
    imagen: String,
    descripcion: String,
    categoria: String,
    disponibilidad: Boolean,
})



module.exports = productSchema;