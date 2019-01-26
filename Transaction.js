var mongoose = require('mongoose');
var TransactionSchema = new mongoose.Schema({
  transaction_date: {type: Date,default: Date.now},
  user_ID: String,
  product_ID: String,
  price : Number,
  quantity : Number,
});
module.exports = mongoose.model('Transaction', TransactionSchema);
