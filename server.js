const express = require('express')
const app = express();
const axios = require("axios").default;
let path = require('path');
const port = 5000;

let ejs = require('ejs');

//enable json to be use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup public folder
app.use(express.static('./public'));

// create routes 
// display homepage 
app.get('/', (req, res)=> {
    //render home page
    res.render('pages/index');
});

// display create shop html page 
app.get('/create-shop', (req, res)=>{
    res.render('pages/register-store');
})

// display brand directory html page 
app.get('/brand-directory', (req, res)=>{
    res.render('pages/brand-directory');
})

//send data for brand directory page
app.get('/all-shops', (req, res)=>{
    // get data from external api 
    axios.get("https://api-afrikorture.glitch.me/stores")
    .then((response)=>{
        let all_stores_data = response["data"];

        // filter the data and get only the data that is needed by the user 
        let needed_store_data=[];
        all_stores_data.forEach((store)=>{
            needed_store_data.push({store_name: store["store_name"], county:store["county"], address:store["store_address"]});
        })
        res.send(needed_store_data);
    })
    .catch((err)=>{
        console.log(err);
    })
    
})

// women related routing starts =========================================
// display this html page for women accessories
app.get('/women-accessories', (req, res)=>{
    res.render('pages/women-accessories');
})

//get data from external api for women accessories page
// app.get('/women-accessories-data', (req, res)=>{
//     // get data from external api 
//     axios.get("https://api-afrikorture.glitch.me/women-accessories")
//     .then((response)=>{
//         let all_stores_data = response["data"];
//         console.log(all_stores_data);

//         // filter the data and get only the data that is needed by the user 
//         let needed_store_data=[];
//         all_stores_data.forEach((store)=>{
//             needed_store_data.push({store_name: store["store_name"], county:store["county"], address:store["store_address"]});
//         })
//         res.send(needed_store_data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
    
// })

// display this html page for women shirts and blouses
app.get('/women-shirt-&-blouse', (req, res)=>{
    res.render('pages/women-shirt-&-blouse');
})

// display this html page for women trouser and pants
app.get('/women-trousers-&-pants', (req, res)=>{
    res.render('pages/women-trousers-&-pants');
})

// display this html page for women dresses and skirts
app.get('/women-dresses-&-skirts', (req, res)=>{
    res.render('pages/women-dresses-&-skirts');
})

// display this html page for women shirts and blouse
app.get('/women-footwear', (req, res)=>{
    res.render('pages/women-footwear');
})

// men related routing starts =========================================
// display this html page for men accessories
app.get('/men-accessories', (req, res)=>{
    res.render('pages/men-accessories');
})

// display this html page for men shirts and blouses
app.get('/men-shirt', (req, res)=>{
    res.render('pages/men-shirt');
})

// display this html page for men trouser and pants
app.get('/men-trousers-&-pants', (req, res)=>{
    res.render('pages/men-trousers-&-pants');
})

// display this html page for men shirts and blouse
app.get('/men-footwear', (req, res)=>{
    res.render('pages/men-footwear');
})

// kids related routing starts =========================================
// display this html page for kids accessories
app.get('/kids-accessories', (req, res)=>{
    res.render('pages/kids-accessories');
})

// display this html page for kids shirts and blouses
app.get('/kids-shirt-&-blouse', (req, res)=>{
    res.render('pages/kids-shirt-&-blouse');
})

// display this html page for kids trouser and pants
app.get('/kids-trousers-&-pants', (req, res)=>{
    res.render('pages/kids-trousers-&-pants');
})

// display this html page for kids dresses and skirts
app.get('/kids-dresses-&-skirts', (req, res)=>{
    res.render('pages/kids-dresses-&-skirts');
})

// display this html page for kids shirts and blouse
app.get('/kids-footwear', (req, res)=>{
    res.render('pages/kids-footwear');
})


// beauty related routing starts =========================================
// display this html page for beauty accessories
app.get('/beauty-accessories', (req, res)=>{
    res.render('pages/beauty-accessories');
})

// display this html page for body & bath
app.get('/body-and-bath', (req, res)=>{
    res.render('pages/body-and-bath');
})

// display this html page for kids accessories
app.get('/hair-care', (req, res)=>{
    res.render('pages/hair-care');
})

// display this html page for kids accessories
app.get('/skin-care', (req, res)=>{
    res.render('pages/skin-care');
})


// apartment related routing starts =========================================
// display this html page for home decoration products
app.get('/home-decoration', (req, res)=>{
    res.render('pages/home-decoration');
})


// eat related routing starts =========================================
// display this html page for snacks
app.get('/snacks', (req, res)=>{
    res.render('pages/snacks');
})


//routing to get all products starts =========================================
// display this html page for all products
app.get('/shop-all', (req, res)=>{
    res.render('pages/shop-all');
})


//routing to get all women products only starts =========================================
// display this html page for all women products
app.get('/women', (req, res)=>{
    res.render('pages/women');
})


//routing to get all men products only starts =========================================
// display this html page for all men products
app.get('/men', (req, res)=>{
    res.render('pages/men');
})



//routing to get all kid products only starts =========================================
// display this html page for all kid products
app.get('/kids', (req, res)=>{
    res.render('pages/kids');
})


//routing to get all beauty products only starts =========================================
// display this html page for all beauty products
app.get('/beauty', (req, res)=>{
    res.render('pages/beauty');
})


//routing to get all apartment products only starts =========================================
// display this html page for all apartment products
app.get('/apartment', (req, res)=>{
    res.render('pages/apartment');
})


//routing to get all food products only starts =========================================
// display this html page for all food products
app.get('/eat', (req, res)=>{
    res.render('pages/eat');
})

//enable user to register a shop by adding shop details to the database
app.post('/store-registration', (req,res)=>{
    
    let store_details = req.body;
    // console.log(store_details);

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

// notify which port is listening on
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});