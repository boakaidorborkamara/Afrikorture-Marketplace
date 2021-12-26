const express = require('express')
const app = express();
const axios = require("axios").default;
let path = require('path');
const port = 5000;

//enable json to be use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup public folder
app.use(express.static('./public'));

// create routes 
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

app.get('/create-shop', (req, res)=>{
    res.render('pages/register-store');
})


app.get('/brand-directory', (req, res)=>{

    axios.get("https://api-afrikorture.glitch.me/stores")
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err);
    })
    res.render('pages/brand-directory');
})


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