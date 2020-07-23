// DECLARING FUNCTION 
// FUNCTION FOR NUMBER WITH COMMA 
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function increaseQuantity(id) {
    let quantity = parseFloat(document.getElementById(id).value);
    let finalQuantity = quantity + 1;
    document.getElementById(id).value = finalQuantity;
}
function decreaseQuantity(id) {
    let quantity = parseFloat(document.getElementById(id).value);
    if (document.getElementById("sm-quantity").value >= 0) {
        let finalQuantity = quantity - 1;
        document.getElementById(id).value = finalQuantity;
    } else(document.getElementById("sm-quantity").value >! 0)
    
}
function updatePrice(id, amount) {
    let price = parseInt(document.getElementById(id).innerText);
    let updatePrice = price + amount;
    document.getElementById(id).innerText = updatePrice;
}

function updateTotal(id, amount) {
    let priceToNumber = parseFloat(document.getElementById(id).innerText.replace(/,/g, ''))
    let subPrice = parseInt(priceToNumber, 10);
    let updatePrice = subPrice + amount;
    document.getElementById(id).innerText = numberWithCommas(updatePrice);
}

// EVENT FOR SMARTPHONE ADD BUTTON 
document.getElementById("plus-sm-quantity").addEventListener("click", function () {
    increaseQuantity("sm-quantity");
    updatePrice("sm-price", 1219);
    updateTotal("sub-price", 1219);
    updateTotal("total-price", 1219);
})

// EVENT FOT SMARTHONE MINUS BUTTON 
document.getElementById("minus-sm-quantity").addEventListener("click", function(){
    decreaseQuantity("sm-quantity");
    updatePrice("sm-price", (1219 * -1));
    updateTotal("sub-price", (1219 * -1));
    updateTotal("total-price", (1219 * -1));
})

// EVENT FOR CASE ADD BUTTON 
document.getElementById("plus-case-price").addEventListener("click", function(){
    increaseQuantity("case-quantity");
    updatePrice("case-price", 59);
    updateTotal("sub-price", 59);
    updateTotal("total-price", 59);
})

// EVENT FOR CASE MINUS BUTTON 
document.getElementById("minus-case-price").addEventListener("click", function(){
    decreaseQuantity("case-quantity");
    updatePrice("case-price", (59 * -1));
    updateTotal("sub-price", (59 * -1));
    updateTotal("total-price", (59 * -1));
})

// EVENT FOR REMOVE SMARTPHONE 
document.getElementById("remove-sm").addEventListener("click", function(){
    document.getElementsByClassName("cart-item")[0].style.display = "none";

})
// EVENT FOR REMOVE SMARTPHONE 
document.getElementById("remove-case").addEventListener("click", function(){
    document.getElementsByClassName("cart-item")[1].style.display = "none";
})

// EVENT HANDLER FOR CHECKOUT 
document.getElementsByClassName("check-out")[0].addEventListener("click", function () {
    document.getElementById("product-quantity").style.display = "none";
    document.getElementById("checkout").style.display = "block";
})