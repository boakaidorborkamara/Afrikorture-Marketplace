const res = require("express/lib/response");
const { all } = require("../routers/products_router");
const axios = require("axios").default;


//get all products that are currently in the database
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

//count the amount of products under each category
function countProductsPerCategory(products){
    let women_total_products = 0;
    let men_total_products = 0;
    let kids_total_products = 0;
    let beauty_total_products = 0;
    let apartment_total_products = 0;
    let eat_total_products = 0;
    let counter_result = {};
    
    // count products 
    products.forEach(product => {
        console.log(product["main_category"]);

        if(product["main_category"] === "Women"){
            women_total_products++;
        }
        else if(product["main_category"] === "Kids"){
            kids_total_products++;
        }
        else if(product["main_category"] === "Beauty"){
            beauty_total_products++;
        }
        else if(product["main_category"] === "Apartment"){
            apartment_total_products++;
        }
        else if(product["main_category"] === "Eat"){
            eat_total_products++;
        }
        else if(product["main_category"] === "Men"){
            men_total_products++;
        }

    });


    // store result into an object  
    counter_result["women_total_products"] = women_total_products;
    counter_result["men_total_products"] = men_total_products;
    counter_result["kids_total_products"] = kids_total_products;
    counter_result["beauty_total_products"] = beauty_total_products;
    counter_result["apartment_total_products"] = apartment_total_products;
    counter_result["eat_total_products"] = eat_total_products;


    // console.log(counter_result);
    return counter_result;

}


exports.homepage = (req,res)=>{
    
    let all_products;
    let total_products;

    let result = getAllProducts()
    .then((results)=>{
        all_products = results['data'];
        total_products = countProductsPerCategory(all_products);
        console.log(total_products);

        //send data to the frontend
        res.render('pages/index');
    })



    
    
}