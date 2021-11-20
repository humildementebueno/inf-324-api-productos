var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ProductModelSchema = Schema({
    name: String,
    email: String
  })
  var ProductModel = mongoose.model('ProductModel', ProductModelSchema)
  
module.exports=ProductModel