const express = require('express')
const app = express();
const router = express.Router();
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
app.use(express.static('../public'));


//ROUTERS
const index_router = require('./routers/index_route');
const product_router = require('./routers/products_router');
const shop_routes = require('./routers/shop_routes');

app.use("/", index_router);
app.use(product_router);
app.use(shop_routes);


// notify which port is listening on
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});