var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  productName: String,
  kind: String,
  size: String,
  inventory_amount : Number,
  price : Number,
  img: String,
  description: String,
  volume: {type: Number,default: 0}
});
module.exports = mongoose.model('Product', ProductSchema);