const axios = require("axios").default;


exports.all_products = (req,res)=>{
    let products;

    //get all product
    (async function getAllProducts(){
        try{
            const response = await axios.get("https://api-afrikorture.glitch.me/product");
            products = response["data"]["data"];
            console.log(products);
        }
        catch(err){
            console.error(err);
        }

        console.log('sending to frontend')
        res.render('pages/products-page', {all_products:products});

    })(); 
}