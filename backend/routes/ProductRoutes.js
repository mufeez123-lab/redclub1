const express = require('express');
const router = express.Router();
const Product = require('../models/productSchema');

// Create product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get product by ID
router.get('/:id', async (req, res) => {
  const product = await Product.findOne({ productId: req.params.id });
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// Update product
router.put('/:id', async (req, res) => {
  const updatedProduct = await Product.findOneAndUpdate(
    { productId: req.params.id },
    req.body,
    { new: true }
  );
  if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
  res.json(updatedProduct);
});

// Delete product
router.delete('/:id', async (req, res) => {
  const deletedProduct = await Product.findOneAndDelete({ productId: req.params.id });
  if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
  res.json({ message: "Product deleted" });
});

module.exports = router;
