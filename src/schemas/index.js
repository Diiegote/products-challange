const { MONGO_URI } = require('../config/envs');
const mongoose = require('mongoose');

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
   Product: conn.model("Product", require("./productSchema")),
}