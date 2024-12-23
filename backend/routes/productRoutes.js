const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// POST: Create a new product
router.post('/', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  // Create a new product
  const product = new Product({
    name,
    description,
    price,
    imageUrl
  });

  try {
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);  // Respond with the created product
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' });  // Handle error
  }
});

module.exports = router;
