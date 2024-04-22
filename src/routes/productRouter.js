const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/get", productController.get_products);

router.get("/get/:id", productController.get_product);

router.put("/update/:id", productController.update_product);

router.post("/create", productController.create_product);

router.delete("/delete/:id", productController.delete_product);

module.exports = router;
