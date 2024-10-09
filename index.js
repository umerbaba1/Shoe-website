const increment=document.getElementById("increment")
const decrement=document.getElementById("decrement")
const cart=document.getElementById("add-to-cart")
const shoevalue=document.getElementById("quantity")
const page=document.querySelector("#page")


let shoes=0;

increment.addEventListener("click",function(){
    shoes++
    decrement.disabled=false;
    cart.disabled=false;
    shoevalue.value=shoes

    if(shoes===5){
        increment.disabled=true;
    }

})

decrement.addEventListener("click",function(){
    shoes--
    if(shoes===0){
        decrement.disabled=true;
        cart.disabled=true;
    }
    shoevalue.value=shoes

})

cart.addEventListener("click", function() {
    cart.innerHTML = `<img src="loader.svg" alt="">`;

    // First timeout to show the initial confirmation
    setTimeout(function() {
        page.innerHTML = `
            <div class="confirmation-container">
                <h1>Order Confirmed!</h1>
                <p>Thank you for your purchase!</p>
                <div class="sneaker-confirmation">
                    <h2>You have ordered: ${shoes} Jordan</h2>
                    <img src="jordan.png" alt="Ordered Sneaker" class="ordered-sneaker-image">
                    <p>Jordan 214</p>
                </div>
            </div>
        `;
    }, 1000);

    // Second timeout to show the final page with the button
    setTimeout(function() {
        page.innerHTML = `
            <div class="confirmation-container">
                <h1>Order Confirmed!</h1>
                <p>Thank you for your purchase!</p>
                <div class="sneaker-confirmation">
                    <h2>You have ordered: ${shoes} Jordan</h2>
                    <img src="jordan.png" alt="Ordered Sneaker" class="ordered-sneaker-image">
                    <p>Jordan 214</p>
                </div>
                <div class="return-home">
                    <button id="homeButton">Return to Home Page</button>
                </div>
            </div>
        `;

        // Attach the event listener to the home button after it's added to the DOM
        const homeButton = document.getElementById("homeButton");
        if (homeButton) {
            homeButton.addEventListener("click", home);
        } else {
            console.error("homeButton is null");
        }
    }, 4000);
});

// Define the home function
function home() {
    
    setTimeout(function(){
        window.location.href = "index.html"; // Redirect to the home page

    },1000)
   
}
