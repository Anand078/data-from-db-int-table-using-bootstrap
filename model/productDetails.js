var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productDetails = new Schema({
    productName: {type: String},
    productDescription: {type: String},
    price: {type: Number},
    quantity: {type: Number}
});

module.exports = mongoose.model('Product', productDetails);