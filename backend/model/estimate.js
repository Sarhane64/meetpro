const mongoose = require("mongoose");

const estimateShema = mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

const estimate = mongoose.model("estimate", estimateShema);

module.exports = estimate;
