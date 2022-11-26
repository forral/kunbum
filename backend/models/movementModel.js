const mongoose = require("mongoose");

const movementSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    account: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movement", movementSchema);
