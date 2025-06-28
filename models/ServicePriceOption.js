const mongoose = require("mongoose");
const priceOptionSchema = new mongoose.Schema({
    duration: String,
    price: Number,
    type: {
        type: String,
        enum: ["Hourly", "Weekly", "Monthly"],
    },
});

module.exports = priceOptionSchema;