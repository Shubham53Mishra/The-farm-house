const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Ensure this field is present
  },
  description: {
    type: String,
    required: true,  // Ensure this field is present
  },
  price: {
    type: Number,
    required: true,  // Ensure this field is present
  },
  imageUrl: {
    type: String,
    required: true,  // Ensure this field is present
  },
});

module.exports = mongoose.model('Product', productSchema);
