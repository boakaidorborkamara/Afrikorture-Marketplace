let cart_status = document.getElementById("cart-notification");
console.log(cart_status);

let cart = [];
let image_url;
let product_name;
let product_price;
let cart_items_counter = 0;


let cart_btn = document.querySelectorAll(".cart-btn");
console.log(cart_btn);

/* loop through the html code of the selected product card
   and get the product name, price, image and add the info to cart */
function addToCart(clicked_cart_btn){
    console.log(clicked_cart_btn);

    //the container that have the add to cart button and the view Detail btn
    let add_to_cart_btn_parent_ele = clicked_cart_btn.parentElement;

    //the entire product card for the product that user want to purchase 
    let selected_product_card = add_to_cart_btn_parent_ele.parentElement;


    //containers with the product name, price, and picture
    let detials = selected_product_card.children;


    //get actual price, name, and image for selected product
    for(i = 0; i < 2; i++){

        // image 
        if(i === 0){
            //get image link for selected product from html tag
            let img_container = detials[i];
            image_url = img_container.children;
            image_url = image_url[0]['currentSrc'];
            console.log(image_url);
        }
        // name and price 
        else if(i == 1){
            //get name and price of selected product
            let product_name_and_price_container = detials[i].children;

            for(j = 0; j < product_name_and_price_container.length; j++){

                if(j === 0){
                    product_name = product_name_and_price_container[j].innerText;
                    console.log(product_name);
                }
                else if(j === 1){
                    product_price = product_name_and_price_container[j].innerText;
                    console.log(product_price);
                }
    
            }
        }

    }

    //send the details to the cart
    cart[product_name] = {name:product_name, price: product_price, image:image_url};
    
    //update cart items counter
    cart_items_counter++;
    //display count in the browser
    cart_status.innerHTML = cart_items_counter;

    console.log(cart);
    console.log(cart_items_counter);
}


//increment user item each time an item is added to the cart
function updateCartStatus(){
    let item_amount = 0;
    
    for(i = 0; i < cart.length; i++){
        item_amount++;
        console.log(item_amount);
    }

    console.log("working");
    console.log("cart", typeof cart);
    console.log(item_amount);

}

// add functionality to each ADD TO CART btn on the product page
for(i = 0; i < cart_btn.length; i++){
    // console.log(cart_btn[i]);

    cart_btn[i].addEventListener("click", (e)=>{
        let selected_btn = e.target;

        addToCart(selected_btn);
        // updateCartStatus();
    });
    
}

