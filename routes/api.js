var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/producto', function(req, res, next) {
    var vecProd=["producto1", "producto2"];
  res.send(vecProd);
});

router.post('/producto/:id', function(req, res, next) {
   // var vecProd=["producto1", "producto2"];  
  res.send((req.params.id));
 // res.send(`User ${req.params.id} updated`);
});



module.exports = router;
