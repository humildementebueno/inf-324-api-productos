var express = require('express');
var router = express.Router();
var ProductModel = require('../models/ProductModel');

/* GET users listing. */
router.get('/producto', findingProduct);

router.post('/producto/:user/:email', function(req, res, next) {
   // var vecProd=["producto1", "producto2"];  
   
  const user=req.params.user
  const email=req.params.email  
  
  saveProduct(user,email)
  
  res.send((req.params));
 // res.send(`User ${req.params.id} updated`);
});

async function saveProduct( user,email){
  var productOne = new ProductModel({
    name: user,
    email: email})
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
