const express = require('express');
const router = express.Router();

//CONTROLLER
const productController = require('../controllers/productController');


router.get('/all-products',productController.all_products);
router.get('/men', productController.men_products);
router.get('/women', productController.kid_products);
router.get('/kids', productController.kid_products);
router.get('/beauty', productController.kid_products);
router.get('/apartment', productController.kid_products);
router.get('/eat', productController.kid_products);






module.exports = router;