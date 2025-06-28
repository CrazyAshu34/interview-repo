const mongoose = require("mongoose");
const servicePriceOptionSchema = require("./ServicePriceOption");

const serviceSchema = new mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    name: { type: String, required: true },
    type: { type: String, enum: ['Normal', 'VIP'], required: true },
    priceOption: [servicePriceOptionSchema]
});

module.exports = mongoose.model("Service", serviceSchema);