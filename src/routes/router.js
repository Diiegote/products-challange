const { Router } = require("express");
const allProductsControllers = require("../controllers/allProductsControllers");
const getProductByIdControllers = require("../controllers/getProductByIdControllers");
const editProductControllers = require("../controllers/editProductControllers");
const createProductControllers = require("../controllers/createProductControllers");
const isValidObjectId = require("../middlewares/validationId");
const asyncCatched = require("../utils/asyncCatched");
const validateCreateProduct = require("../middlewares/validationProducts/validationCreateProduct");
const validationResultExpress = require("../middlewares/validationResultExpress");
const validateEditProduct = require("../middlewares/validationProducts/validationEditProduct");


const router = Router();

router.get('/products', asyncCatched(allProductsControllers));
router.get('/product/:id', isValidObjectId("id"), asyncCatched(getProductByIdControllers));
router.post('/new-product', validateCreateProduct, validationResultExpress, asyncCatched(createProductControllers));
router.patch('/edit-product/:id', isValidObjectId("id"), validateEditProduct, validationResultExpress, asyncCatched(editProductControllers));

module.exports = router;