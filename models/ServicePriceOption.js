const mongoose = require("mongoose");
const servicePriceOptionSchema = new mongoose.Schema({
    duration: String,
    price: Number,
    type: {
        type: String,
        enum: ["Hourly", "Weekly", "Monthly"],
    },
});

module.exports = servicePriceOptionSchema;