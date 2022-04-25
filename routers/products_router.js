const express = require('express');
const router = express.Router();

//CONTROLLER
const productController = require('../controllers/productController');


router.get('/product',productController.all_products);


module.exports = router;