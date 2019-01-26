var mongoose = require('mongoose');
var CartSchema = new mongoose.Schema({
	uId: String,
	// uType: String,
    cId: String,
	// cstore_ID:String,
    cName: String,
    cPrice: Number,
    cImgSrc: String,
    cQuantity: Number
});

module.exports = mongoose.model('Cart', CartSchema);