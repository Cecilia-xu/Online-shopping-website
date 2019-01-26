var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    address: String,
    marriage_status: String,
    gender: String,
    age : Number,
    income : Number,
    username: String,
    password: String,
    email: String,
    tel: String,
});
module.exports = mongoose.model('User', UserSchema);