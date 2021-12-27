let main_container = document.getElementById("main-container");
console.log(main_container);

let url = "/all-shops";
let stores;
fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      stores = data;

    //   display stores on the brand directory page 
      stores.forEach((store)=>{
        // create html for individual store 
        let html = `
        <div class="card col-lg-4">
            <div class="d-flex justify-content-start">
                <div class="bg-dark text-light d-flex justify-content-end align-items-center p-5 me-4">
                    <h3>A</h3>
                </div>
                <div class="d-flex justify-content-center flex-column">
                    <h4 class="fw-bolder">${store["store_name"]}</h4>
                    <p>${store["county"]}</p>
                    <p>${store["address"]}</p>
                </div>
            </div>
        </div>
        `
        // add html with store details to the DOM 
        main_container.insertAdjacentHTML("beforeend", html);
      })
})
.catch((err)=>{
    if(err){
        console.log(err);
    }
})

