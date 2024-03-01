// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Định nghĩa các route cho quản lý sản phẩm
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
