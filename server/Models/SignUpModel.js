let mongoose = require('mongoose');
let signUpSchema = new mongoose.Schema({
    username:String,
    email:String,
    phone:Number,
    password:String,
    option:String
})
module.exports = mongoose.model("Signups",signUpSchema);