
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  ratings: { type: Number, default: 0 },  
  stock: { type: Number, default: 0 },    
  images: [
    {
      image: { type: String }
    }
  ],
  category: { type: String },
  seller: { type: String },
  numOfReviews: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const productModel = mongoose.model('Product', productSchema); 
module.exports = productModel;
