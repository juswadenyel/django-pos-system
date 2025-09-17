// pos_app/static/pos_app/js/script.js

document.addEventListener("DOMContentLoaded", () => {
    const cartCounter = document.querySelector("#cart-count");
    let count = 0;

    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            count++;
            cartCounter.textContent = count;
            alert("Item added to cart!");
        });
    });
});
