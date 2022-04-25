const axios = require("axios").default;

let url ;
let page_header_title;


//display all products 
exports.all_products = (req,res)=>{
    url = req.url;
    let products;

    //set page header base on the url visited
    if(url == "/all-products"){
        page_header_title = "All Products";
    }

    //get all product
    (async function getAllProducts(){
        try{
            const response = await axios.get("https://api-afrikorture.glitch.me/product");
            products = response["data"]["data"];
            products["page_title"] = page_header_title;
            console.log(products);
        }
        catch(err){
            console.error(err);
        }

        console.log('sending to frontend')
        res.render('pages/products-page', {results:products});

    })(); 
}


//display only men products
exports.men_products = (req, res)=>{
    let men_products;
    url = "/men"

    //set page header
    if(url == '/men'){
        page_header_title = "Men Products"
        console.log(url);
    }

    //get all men product
    (async function getMenProducts(){
        try{
            const response = await axios.get("https://api-afrikorture.glitch.me/product/Men");
            men_products = response["data"]["data"];
            men_products["page_title"] = page_header_title;
            console.log(men_products);
        }
        catch(err){
            console.error(err);
        }

        console.log('sending data to frontend')
        res.render('pages/products-page', {results:men_products});

    })();

    
}

//display only men products
exports.women_products = (req, res)=>{
    let women_products;
    url = "/women"

    //set page header
    if(url == '/women'){
        page_header_title = "Women Products"
        console.log(url);
    }

    //get all men product
    (async function getMenProducts(){
        try{
            const response = await axios.get("https://api-afrikorture.glitch.me/product/Women");
            women_products = response["data"]["data"];
            women_products["page_title"] = page_header_title;
            console.log(women_products);
        }
        catch(err){
            console.error(err);
        }

        console.log('sending data to frontend')
        res.render('pages/products-page', {results:women_products});

    })();

    
}


//display only kids products
exports.kid_products = (req, res)=>{
    let kids_products;
    url = "/kids"

    //set page header
    if(url == '/kids'){
        page_header_title = "Kids Products"
        console.log(url);
    }

    //get all kids product
    (async function getMenProducts(){
        try{
            const response = await axios.get("https://api-afrikorture.glitch.me/product/Kids");
            kids_products = response["data"]["data"];
            kids_products["page_title"] = page_header_title;
            console.log(kids_products);
        }
        catch(err){
            console.error(err);
        }

        console.log('sending data to frontend')
        res.render('pages/products-page', {results:kids_products});

    })();

    
}


//display only beauty products
exports.beauty_products = (req, res)=>{
    let beauty_products;
    url = "/beauty"

    //set page header
    if(url == '/beauty'){
        page_header_title = "Beauty Products"
        console.log(url);
    }

    //get all kids product
    (async function getMenProducts(){
        try{
            const response = await axios.get("https://api-afrikorture.glitch.me/product/Kids");
            beauty_products = response["data"]["data"];
            beauty_products["page_title"] = page_header_title;
            console.log(beauty_products);
        }
        catch(err){
            console.error(err);
        }

        console.log('sending data to frontend')
        res.render('pages/products-page', {results:beauty_products});

    })();

    
}


//display only apartment products
exports.apartment_products = (req, res)=>{
    let apartment_products;
    url = "/apartment"

    //set page header
    if(url == '/apartment'){
        page_header_title = "Apartment Products"
        console.log(url);
    }

    //get all kids product
    (async function getMenProducts(){
        try{
            const response = await axios.get("https://api-afrikorture.glitch.me/product/Kids");
            apartment_products = response["data"]["data"];
            apartment_products["page_title"] = page_header_title;
            console.log(apartment_products);
        }
        catch(err){
            console.error(err);
        }

        console.log('sending data to frontend')
        res.render('pages/products-page', {results:apartment_products});

    })();

    
}


//display only eat products
exports.apartment_products = (req, res)=>{
    let eat_products;
    url = "/eat"

    //set page header
    if(url == '/eat'){
        page_header_title = "Eat Products"
        console.log(url);
    }

    //get all kids product
    (async function getMenProducts(){
        try{
            const response = await axios.get("https://api-afrikorture.glitch.me/product/Kids");
            eat_products = response["data"]["data"];
            eat_products["page_title"] = page_header_title;
            console.log(eat_products);
        }
        catch(err){
            console.error(err);
        }

        console.log('sending data to frontend')
        res.render('pages/products-page', {results:eat_products});

    })();

    
}