function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produs adăugat în coș!");
}

document.addEventListener("DOMContentLoaded", () => {
    const addButtons = document.querySelectorAll(".add-to-cart-button");
    addButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            let product;
            if (this.closest(".product-container").querySelector("h1").textContent.includes("dark grey")) {
                product = {
                    name: "Pantaloni de trening - dark grey",
                    price: 149,
                    image: "products/baggy_pantaloni/art001gray.png"
                };
            } else if (this.closest(".product-container").querySelector("h1").textContent.includes("albastru")) {
                product = {
                    name: "Pantaloni de trening - albastru",
                    price: 139,
                    image: "products/baggy_pantaloni/art002blue.png"
                };
            } else if (this.closest(".product-container").querySelector("h1").textContent.includes("roșu")) {
                product = {
                    name: "Pantaloni de trening - roșu",
                    price: 159,
                    image: "products/baggy_pantaloni/art003red.png"
                };
            }

            addToCart(product);
        });
    });
});
