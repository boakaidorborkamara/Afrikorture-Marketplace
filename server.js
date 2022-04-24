const express = require('express')
const app = express();
const axios = require("axios").default;
let path = require('path');
const port = process.env.PORT ||  3500;

let ejs = require('ejs');
const { response } = require('express');

//enable json to be use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup static middleware
app.use(express.static('./public'));


// notify which port is listening on
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});