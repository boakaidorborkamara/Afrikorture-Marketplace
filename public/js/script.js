
// the current route in the browser 
let current_route = window.location.pathname;
console.log(current_route);
let url;

//Display all the data from the current route 
function getData(){
    // parent container that holds the product cards 
    let product_area = document.getElementById("product-area");
    console.log(product_area);

    // add page name
    let page_title = document.getElementById("page-title");
    // page_title.slice(1); // remove the / sign from the page title
    page_title.innerText = current_route; 

    let url = "https://api-afrikorture.glitch.me"+current_route;
    console.log("URL",url)
    let women_accessories;
    fetch(url)
    .then(response => response.json())
    .then((data)=>{
        women_accessories = data;
        console.log(typeof women_accessories);

        // add data to page 
        for(let accessory in women_accessories){

            let product_card = `
            <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
                <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img class="img-fluid w-100" src="img/product-1.jpg" alt="">
                </div>
                <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 class="text-truncate mb-3"> <strong>${women_accessories[accessory].name}</strong></h6>
                    <div class="d-flex justify-content-center">
                        <h6>Price: $ ${women_accessories[accessory].price}.00</h6>
                        <!-- <h6 class="text-muted ml-2"><del>$123.00</del></h6> -->
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between bg-light border">
                    <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
            </div>
            `
            product_area.insertAdjacentHTML("beforeend", product_card);
            console.log(women_accessories[accessory]);
        }

        // add pagination 
        let pagination = `
        <div class="col-12 pb-1">
        <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center mb-3">
            <li class="page-item disabled">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </a>
            </li>
        </ul>
        </nav>
        </div>
        `
        product_area.insertAdjacentHTML("beforeend", pagination);

    })
}






// call functions 
// get all women accesories base on selected menu item
if(!current_route){
    console.log("not")
    getData();
}
else{
    getData();
}



    


 




