const express = require("express");
const router = express.Router();

router.get("/create-shop", (req,res)=>{
    res.send("Working on creating and displaying shops");
});

module.exports = router;