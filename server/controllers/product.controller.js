// controllers/productController.js

const ProductService = require("../services/productService");

const productService = new ProductService();

// Controller để xử lý yêu cầu liệt kê tất cả sản phẩm
exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller để xử lý yêu cầu lấy một sản phẩm theo ID
exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.getProductById(productId);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Controller để xử lý yêu cầu tạo một sản phẩm mới
exports.createProduct = async (req, res) => {
  const productData = req.body;
  console.log(productData);
  try {
    const newProduct = await productService.createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller để xử lý yêu cầu cập nhật thông tin của một sản phẩm
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;
  console.log(productData, productId, "body data");
  try {
    const updatedProduct = await productService.updateProduct(
      productId,
      productData
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Controller để xử lý yêu cầu xóa một sản phẩm
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await productService.deleteProduct(productId);
    res.json(deletedProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
