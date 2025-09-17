// pos_app/static/pos_app/js/script.js

// Example: Add to cart button click
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });
});
