const getProductByIdServices = require("../services/getProductByIdServices");


const getProductByIdControllers = async ({ params }, res) => {
   const { id } = params;
   const product = await getProductByIdServices(id);
   res.status(201).json(product);
};

module.exports = getProductByIdControllers;