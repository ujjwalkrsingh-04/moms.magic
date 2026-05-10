

/* Clear Cart */
function clearCart() {
    cart = [];
    total = 0;

    updateCartUI();
}

// Clear Cart
function clearCart() {
    cart = [];
    total = 0;
    updateCartUI();
}

function yourorder() {
    alert(
        "Thanks for choosing Mom's Magic! Your delicious food is on the way to your doorstep. Enjoy your meal!",
    );
}
function OrderNow() {
    alert("Thanks for choosing Mom's Magic! Your Order is Booked ");
}
async function placeOrder(foodItem, price) {
    const customerName = prompt("Enter your name:");
    const phone = prompt("Enter your phone:");
    const address = prompt("Enter your address:");

    if (!customerName || !phone || !address) {
        alert(" Please fill all details to place an order.");
        return;
    }

    const orderData = { foodItem, price, customerName, phone, address };

    try {
        const res = await fetch("http://localhost:5000/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
        });

        const data = await res.json();
        alert(data.message || "Order placed!");
    } catch (err) {
        alert(" Failed to place order: " + err.message);
    }
}