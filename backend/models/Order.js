const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    // userId: { type: String, required: true },
    customerMobileNumber: { type: String, required: true },
    address: { type: Object },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
