const express = require('express')
const app = express();
const axios = require("axios").default;
let path = require('path');
const port = process.env.PORT ||  3500;

let ejs = require('ejs');

//enable json to be use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup static middleware
app.use(express.static('./public'));



/* creation of routes starts ==================================== GET ROUTES STARTS
====================================================================================
===================================================================================*/

// display homepage 
app.get('/', (req, res)=> {
    //render home page
    res.render('pages/index');
});

// display create-a-shop page 
app.get('/create-shop', (req, res)=>{
    res.render('pages/register-stores');
    // res.send("CREATE SHOP")
})

//display upload product page
app.get('/upload-product',(req,res)=>{
    res.render('pages/add-product')
})

// display brand directory html page 
app.get('/brands', (req, res)=>{
    res.render('pages/brands');

    // get data from external api 
    // axios.get("https://api-afrikorture.glitch.me/stores")
    // .then((response)=>{
    //     let all_stores_data = response["data"];

    //     // filter the data and get only the data that is needed by the user 
    //     let needed_store_data=[];
    //     all_stores_data.forEach((store)=>{
    //         needed_store_data.push({store_name: store["store_name"], county:store["county"], address:store["store_address"]});
    //     })
    //     res.send(needed_store_data);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
})



/*women products routing starts--------------------------------------------------------
--------------------------------------------------------------------------------------*/

// display all women accessories
app.get('/women-accessories', (req, res)=>{
    res.render("pages/products-page")
})


// display all women dresses and skirts
app.get('/women-dress-&-skirt', (req, res)=>{
    res.render('pages/products-page');
})

// display all women trouser and pants
app.get('/women-trouser-and-pant', (req, res)=>{
    res.render('pages/products-page');
})



// display all women shirts and blouse
app.get('/women-foot-wear', (req, res)=>{
    res.render('pages/products-page');
})


/*men products routing starts--------------------------------------------------------
--------------------------------------------------------------------------------------*/

// display all men accessories
app.get('/men-accessories', (req, res)=>{
    res.render('pages/products-page');
})


// display all men trouser and pants
app.get('/men-trouser-and-pant', (req, res)=>{
    res.render('pages/products-page');
})


// display all men shirts and blouses
// app.get('/men-shirt', (req, res)=>{
//     res.render('pages/products-page');
// })


// display all men shirts and blouse
app.get('/men-foot-wear', (req, res)=>{
    res.render('pages/products-page');
})



/*kids products routing starts--------------------------------------------------------
--------------------------------------------------------------------------------------*/

// display all kids accessories
app.get('/kids-accessories', (req, res)=>{
    res.render('pages/products-page');
})

// display all kids shirts and blouses
app.get('/kids-shirt-&-blouse', (req, res)=>{
    res.render('pages/products-page');
})

// display all kids trouser and pants
app.get('/kids-trousers-&-pants', (req, res)=>{
    res.render('pages/products-page');
})

// display all kids dresses and skirts
app.get('/kids-dresses-&-skirts', (req, res)=>{
    res.render('pages/products-page');
})

// display all kids shirts and blouse
app.get('/kids-footwear', (req, res)=>{
    res.render('pages/products-page');
})



/*beauty products routing starts--------------------------------------------------------
--------------------------------------------------------------------------------------*/

// display all beauty accessories products
app.get('/beauty-accessories', (req, res)=>{
    res.render('pages/products-page');
})

// display all body & bath products
app.get('/bath-and-body', (req, res)=>{
    res.render('pages/products-page');
})

// display all haircare products
app.get('/hair-care', (req, res)=>{
    res.render('pages/products-page');
})

// display all skincare products
app.get('/skin-care', (req, res)=>{
    res.render('pages/products-page');
})



/*apartment products routing starts--------------------------------------------------------
--------------------------------------------------------------------------------------*/

// display all home decoration products
app.get('/home-decoration', (req, res)=>{
    res.render('pages/products-page');
})




/*eat products routing starts--------------------------------------------------------
--------------------------------------------------------------------------------------*/

// display all snacks
app.get('/snacks', (req, res)=>{
    res.render('pages/products-page');
})



/*all products routing starts--------------------------------------------------------
--------------------------------------------------------------------------------------*/
app.get('/shop-all', (req, res)=>{

    // get data from external api using async/await
    async function getAllShop(){

        try{
            let response = await axios.get("https://api-afrikorture.glitch.me/products");
            let all_products = response["data"];
            console.log(all_products);

            let page_name = "SHOP ALL";
            res.render('pages/shop', {all_products:all_products, page_name:page_name});
            
        }catch(err){
            //Handle Error
            console.log(err);
        }

    }

    getAllShop();

})


// display all women products
app.get('/women', (req, res)=>{
    res.render('pages/women');
})


// display all men products
app.get('/men', (req, res)=>{
    res.render('pages/men');
})



// display all kid products
app.get('/kids', (req, res)=>{
    res.render('pages/kids');
})


// display all beauty products
app.get('/beauty', (req, res)=>{

    // get data from external api 
    let data ;
    axios.get("https://api-afrikorture.glitch.me/beauty-accessories")
    .then((response)=>{
        data = response;
    })
    .catch((error)=> {
        console.log(error);
    })

    // wait for data before render the ejs template 
    setTimeout(()=>{
        console.log(data);
        res.render('pages/beauty-accessories', data);
    }, 3000);
    // res.render('pages/beauty');
})


// display all apartment products
app.get('/home-decoration', (req, res)=>{
    // get data from external api 
    let data ;
    axios.get("https://api-afrikorture.glitch.me/home-decoration")
    .then((response)=>{
        data = response;
    })
    .catch((error)=> {
        console.log(error);
    })

    // wait for data before render the ejs template 
    setTimeout(()=>{
        console.log(data);
        res.render('pages/apartment', data);
    }, 3000);
})


// display all food products
app.get('/eat', (req, res)=>{
    res.render('pages/eat');
})




/*POST ROUTES STARTS
====================================================================================
===================================================================================*/


// register shop
app.post('/store-registration', (req,res)=>{
    
    let store_details = req.body;
    console.log(store_details);

    //add data to external api (api-afrikorture)
    let feedback;
    axios.post("https://api-afrikorture.glitch.me/stores", store_details)
      .then(function (response) {
        feedback = response.data;
        console.log(response.status);
        console.log(feedback);
        // validate 
        if(response.status === 200 && feedback["code"] !== 0){
            res.end(JSON.stringify(feedback));
        }
        else if (response.status === 200 && feedback["code"] === 0){
            res.end(JSON.stringify(feedback));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
});


// enable user to upload product 
app.post('/upload-product', (req,res)=>{
    
    // frontend data 
    let product_info = req.body;
    console.log(product_info["username"]);
    let frontend_username = product_info["username"];

    // products already in the database 
    let user_shop;
    let store_id;

    axios.get("https://api-afrikorture.glitch.me/stores")
    .then((response)=>{
        let all_shops = response["data"];

        //check if user exist
        all_shops.forEach((shop)=>{

            if(frontend_username == shop["user_name"]){
                console.log("user is here");
                store_id = shop["store_id"];
                console.log("store id", store_id);
                // console.log(shop);

                // add store_id to product detail 
                product_info["store_id"] = store_id;
                console.log(product_info);
                // remove username 
                delete product_info["username"];
                console.log(product_info);




                //add data to external api (api-afrikorture)
    let feedback;
    axios.post("https://api-afrikorture.glitch.me/products", product_info)
      .then(function (response) {
        feedback = response.data;
        console.log(response);
        console.log(feedback);
        // validate 
        if(response.status === 200 && feedback["code"] !== 0){
            res.end(JSON.stringify(feedback));
        }
        else if (response.status === 200 && feedback["code"] === 0){
            res.end(JSON.stringify(feedback));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
            }
            // else{
            //     res.send({message:"Store not valid, make sure username is valid."})
            // }
            // console.log("frontend",frontend_username);
            // console.log("backend", shop["user_name"]);
        })
        // console.log(all_shops);
    })
    .catch((err)=>{
        if(err){
            console.log(err);
        }
    })

    
});

//add products
// app.post('/add-product'){

// }



// notify which port is listening on
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});