const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  otpType: String,
  destination: String,
  otp: String,
});

const OtpModel = mongoose.model("Otp", otpSchema);
module.exports=OtpModel;