const res = require("express/lib/response");

const axios = require("axios").default;

//get all product
async function getAllProducts(){
    try{
        const response = await axios.get("https://api-afrikorture.glitch.me/product");
        // console.log(response["data"]);
        return response["data"];
    }
    catch(err){
        console.error(err);
    }
}


exports.homepage = (req,res)=>{
    let women_total_products;
    let men_total_products;
    let kids_total_products;
    let beauty_total_products;
    let apartment_total_products;
    let eat_total_products;


    let result = getAllProducts()
    .then((results)=>{
        console.log(results);
    })
    console.log(result);
    res.render('pages/index');
    // res.send("Homepage not yet implemented");
}