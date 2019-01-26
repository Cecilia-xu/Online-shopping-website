var mongoose = require('mongoose');
var ManagerSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    tel: String,
});
module.exports = mongoose.model('Manager', ManagerSchema);