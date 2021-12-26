let first_name = document.getElementById("first-name");
let last_name = document.getElementById("last-name");
let user_name = document.getElementById("user-name");
let email = document.getElementById("email");
let store_name = document.getElementById("store-name");
let store_address = document.getElementById("address");
let county = document.getElementById("county");
let phone_number = document.getElementById("phone-number");
let social_media_link = document.getElementById("social-media-link");
let create_store_btn = document.getElementById("create-store-btn");

create_store_btn.addEventListener("click",()=>{
    
    let user_data = {
        first_name : first_name.value,
        last_name : last_name.value,
        user_name : user_name.value,
        email : email.value,
        store_name : store_name.value,
        store_address : address.value,
        county : county.value,
        phone_number : phone_number.value,
        social_media_link : social_media_link.value
    }

    console.log(user_data)
    

    // add vendor to the database 
    let url = "/store-registration";
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

