const express = require('express');
const router = express.Router();

router.get('/product',(req,res)=>{
    res.render('pages/products-page')
    // res.send("working on getting all products");
})


module.exports = router;