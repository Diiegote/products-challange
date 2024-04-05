const createProductServices = require("../services/createProductServices");


const createProductControllers = async ({ body }, res) => {
   const newProduct = await createProductServices(body);
   res.status(201).json(newProduct);
};

module.exports = createProductControllers;