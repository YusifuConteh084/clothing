document.addEventListener("DOMContentLoaded", function () {
    let cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // Function to update cart display
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price} 
                <button class="remove-item" data-id="${item.id}">❌</button>`;
            cartItems.appendChild(li);
            total += item.price;
        });

        cartCount.textContent = cart.length;
        totalPrice.textContent = total;
    }

    // Add to cart functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const id = product.getAttribute("data-id");
            const name = product.getAttribute("data-name");
            const price = parseFloat(product.getAttribute("data-price"));

            cart.push({ id, name, price });
            updateCart();
        });
    });

    // Remove item from cart
    cartItems.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-item")) {
            const idToRemove = e.target.getAttribute("data-id");
            cart = cart.filter(item => item.id !== idToRemove);
            updateCart();
        }
    });
});
