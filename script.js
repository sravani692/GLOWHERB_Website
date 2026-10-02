/* ==========================================
   GLOWHERB - MAIN JAVASCRIPT
========================================== */


/* ==========================================
   ADD TO CART
========================================== */

function addToCart(name, price) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(
        product => product.name === name
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");

}


/* ==========================================
   NEWSLETTER
========================================== */

function subscribeUser(event) {

    event.preventDefault();

    const emailInput =
        document.getElementById("newsletterEmail");

    if (!emailInput) {
        return;
    }

    const email =
        emailInput.value.trim();

    if (email === "") {

        alert("Please enter your email address.");
        return;

    }

    localStorage.setItem(
        "newsletterEmail",
        email
    );

    alert("Thank you for subscribing!");

    emailInput.value = "";

}


/* ==========================================
   PRODUCT CATEGORY FILTER
========================================== */

function filterProducts(category, button) {

    const products =
        document.querySelectorAll(".shop-product-card");

    const buttons =
        document.querySelectorAll(".category-btn");

    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    if (button) {

        button.classList.add("active");

    }


    let visibleProducts = 0;


    products.forEach(function(product) {

        const productCategory =
            product.getAttribute("data-category");


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display = "block";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    const noProducts =
        document.getElementById("noProducts");


    if (noProducts) {

        if (visibleProducts === 0) {

            noProducts.style.display = "block";

        } else {

            noProducts.style.display = "none";

        }

    }

}


/* ==========================================
   PRODUCT SEARCH
========================================== */

function searchProducts() {

    const searchInput =
        document.getElementById("productSearch");


    if (!searchInput) {
        return;
    }


    const searchText =
        searchInput.value.toLowerCase().trim();


    const products =
        document.querySelectorAll(".shop-product-card");


    let visibleProducts = 0;


    products.forEach(function(product) {

        const productName =
            product
                .getAttribute("data-name")
                .toLowerCase();


        if (
            productName.includes(searchText)
        ) {

            product.style.display = "block";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    const noProducts =
        document.getElementById("noProducts");


    if (noProducts) {

        if (visibleProducts === 0) {

            noProducts.style.display = "block";

        } else {

            noProducts.style.display = "none";

        }

    }

}


/* ==========================================
   ADD TO WISHLIST
========================================== */

function addToWishlist(name, button) {

    let wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];


    /* Check if product already exists */

    if (wishlist.includes(name)) {

        alert(
            name +
            " is already in your wishlist!"
        );


        if (button) {

            button.innerHTML = "♥";

            button.style.color = "#d45b5b";

        }

        return;

    }


    /* Add product */

    wishlist.push(name);


    /* Save wishlist */

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    /* Change heart */

    if (button) {

        button.innerHTML = "♥";

        button.style.color = "#d45b5b";

    }


    alert(
        name +
        " added to wishlist!"
    );

}


/* ==========================================
   REMOVE FROM WISHLIST
========================================== */

function removeFromWishlist(name) {

    let wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];


    wishlist =
        wishlist.filter(
            item => item !== name
        );


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    /* Refresh wishlist page */

    if (
        typeof renderWishlist === "function"
    ) {

        renderWishlist();

    }

}


/* ==========================================
   MOVE WISHLIST PRODUCT TO CART
========================================== */

function moveToCart(name, price) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    let existingProduct =
        cart.find(
            product => product.name === name
        );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    alert(
        name +
        " added to cart!"
    );

}


/* ==========================================
   CLEAR CART
========================================== */

function clearCart() {

    localStorage.removeItem("cart");

    alert("Your cart has been cleared.");

}

/* ==========================================
   LOGOUT
========================================== */

function logoutUser() {

    localStorage.removeItem("loggedInUser");

    alert("You have been logged out.");

    window.location.href =
        "login.html";

}