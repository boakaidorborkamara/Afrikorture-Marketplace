const express = require("express");
const router = express.Router();


//SHOP CONTROLLERs
const shopController = require('../controllers/shopController');


//Display ejs page for creating new shops on GET
router.get("/create-shop", shopController.displayBrandCretionForm);

//Create a new shop on POST
router.post("/create-shop", shopController.createNewShop)

//Display all the shops on the platform
router.get("/all-shops", (req,res)=>{
    res.send("Working on displaying all the shops in db");
})

module.exports = router;