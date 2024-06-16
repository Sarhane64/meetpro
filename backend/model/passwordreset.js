const mongoose = require("mongoose");

const passwordResetShema = mongoose.Schema({
  email: { type: String, required: true },
  token: { type: String,unique: true,required: true },
});

module.exports =  mongoose.model("passwordReset", passwordResetShema);