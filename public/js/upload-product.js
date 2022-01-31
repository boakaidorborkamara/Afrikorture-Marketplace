let username = document.getElementById("username");
console.log(username.value);
let product_name = document.getElementById("product-name");
console.log(product_name)
let description = document.getElementById("description");
console.log(description)
let price = document.getElementById("price");
console.log(price)
let category = document.getElementById("category");
console.log(category);
let type = document.getElementById("type");
console.log(type);
let upload_btn = document.getElementById("upload-btn");
console.log(upload_btn);



upload_btn.addEventListener("click",()=>{
    
    let user_data = {
        username : username.value,
        name : product_name.value,
        description : description.value,
        price : price.value,
        category : category.value,
        type : type.value,
    }

    console.log(user_data)
    

    // add vendor to the database 
    let url = "/upload-product";
    fetch(url, {
        method: "POST",
        body: JSON.stringify(user_data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
     
    // Converting to JSON
    .then(res => res.json())
    .then(res => alert((res)["message"]));

})

