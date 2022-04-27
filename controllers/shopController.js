const { default: axios } = require("axios");
const { response } = require("express");

//display brand registration form
exports.displayBrandCretionForm = ((req, res)=>{
    res.render('pages/create-brand')
    // res.send("Working on displaying shop form");
});


//create new store
exports.createNewShop = ((req,res)=>{
    let new_shop_details = req.body;
    console.log(new_shop_details);
    

    axios.post('https://api-afrikorture.glitch.me/brand/create', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response['data']);
      })
      .catch(function (error) {
        console.log(error);
      }); 

    //get all kids product
    // (async function getMenProducts(){
    //     try{
    //         const response = await axios.post("http://localhost:3000/brand/create",new_shop_details);
    //         eat_products = response["data"]["data"];
    //         console.log(eat_products);
    //     }
    //     catch(err){
    //         console.error(err);
    //     }

    //     console.log('sending data to frontend')
    //     // res.render('pages/products-page', {results:eat_products});

    // })();

    res.send("Working on creating a new shop")
});