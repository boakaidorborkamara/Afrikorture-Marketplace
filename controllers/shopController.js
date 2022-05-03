const { default: axios } = require("axios");
const { json } = require("body-parser");
const { response } = require("express");

//display brand registration form
exports.displayBrandCretionForm = ((req, res)=>{
    res.render('pages/create-brand')
    // res.send("Working on displaying shop form");
});


//create new store
exports.createNewShop = ((req,res)=>{

    // store fronend data 
    let new_shop_details = req.body;

    //change fronend data to json
    new_shop_details = JSON.stringify(new_shop_details);
    console.log(new_shop_details); 
   

    //send frontend data to the database
    (async ()=>{
      try{
        axios.post('https://api-afrikorture.glitch.me/brand/create', new_shop_details )
        .then(function (response) {
          console.log(response['data']);
        })
        .catch(function (error) {
          console.log(error);
        }
        ); 
      }
      catch{
        (err)=>{
          if(err){
            console.log(err);
          }
        }
      }
    })();

    res.send("Working on creating a new shop")
});