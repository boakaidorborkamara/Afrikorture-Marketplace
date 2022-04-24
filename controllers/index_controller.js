const res = require("express/lib/response");

const axios = require("axios").default;

//get all product
async function getAllProducts(){
    try{
        const response = await axios.get("https://api-afrikorture.glitch.me/product");
        console.log(response["data"]);
        return response["data"];
    }
    catch(err){
        console.error(err);
    }
}


exports.homepage = (req,res)=>{
    // let result = getAllProducts(); 
    res.render('pages/index');
    // res.send("Homepage not yet implemented");
}