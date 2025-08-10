const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  images: [String],
  category: String,
  stock: Number,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
