const express = require('express')
const app = express();
const axios = require("axios").default;
let path = require('path');
const port = 3000;

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
    
    let external_api_data;

    axios.get("https://api-afrikorture.glitch.me/vendors")
    .then(function (response){
        external_api_data = response.data
        // console.log(external_api_data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

    //render home page
    res.render('pages/index');

    // res.send(json(external_api_data));
});

// display create shop html page 
app.get('/create-shop', (req, res)=>{
    res.render('pages/register-store');
})

// display brand directory page 
app.get('/brand-directory', (req, res)=>{
    res.render('pages/brand-directory');
})

//send data for for brand directory page
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