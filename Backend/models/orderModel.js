
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
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
      productCreatedAt: { type: Date }, // rename to avoid confusion with order's createdAt
      qty: { type: Number, required: true }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;


