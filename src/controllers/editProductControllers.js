const editProductServices = require("../services/editProductServices");


const editProductControllers = async (req, res) => {
   const { id } = req.params;
   const { body } = req;
   const productEdited = await editProductServices(id, body);
   res.status(201).json(productEdited);

};

module.exports = editProductControllers;