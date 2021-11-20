var express = require('express');
var router = express.Router();
var ProductModel = require('../models/ProductModel');

/* GET users listing. */
router.get('/producto', findingProduct);

router.post('/producto/:id', function(req, res, next) {
   // var vecProd=["producto1", "producto2"];  
  res.send((req.params.id));
 // res.send(`User ${req.params.id} updated`);
});

async function saveProduct(){
  var productOne = new ProductModel({
    name: "nico",
    email: "themarshial@gmail.com"})
  productOne.save(function () {
    console.log('Saved!');
  })
}

async function findingProduct(req,res) {
  const peopleData = await ProductModel.find()
  const jsonPeopleData = JSON.parse(`{"data":${JSON.stringify(peopleData)}}`)
  res.send(jsonPeopleData)

}


module.exports = router;
