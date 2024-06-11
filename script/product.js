const container = document.querySelector("[all-content]");
const searchProduct = document.querySelector("[data-search-input]");
const sortingByAmount = document.querySelector("[data-sort-price]");





function displayProducts(items) {
  container.innerHTML = "";
  try {
    items.forEach((product) => {
      container.innerHTML += `
        <div class="card col-4 m-auto p-0 product-card">
            <img src="${
              product.img_url
            }" class="card-img-top" alt="product-img" loading="lazy"/>
            <div class="card-body">
                <h4 class="card-title">${product.productName}</h4>
                <p class="card-text">R${product.price}</p>
                <div class="product-btns-box">
                    <a class="btn product-btn" data-product-id="${
                      product.id
                    }" data-bs-toggle="modal" data-bs-target="#detailModal">See More</a>
                    <a class="btn product-btn" onclick='addToCart(${JSON.stringify(
                      product
                    )})' cart-btn>Add to Cart</a>
                </div>
            </div>
        </div>
    `;
    });
  } catch (e) {
    container.textContent = "Please try again later";
  }
}
displayProducts(allProducts);

/**searching for item on user input */
searchProduct.addEventListener("keyup", () => {
  try {
    if (searchProduct.value.length < 1) {
      displayProducts(allProducts);
    }
    let filteredProduct = allProducts.filter((product) =>
      product.productName.toLowerCase().includes(searchProduct.value)
    );
    displayProducts(filteredProduct);
    if (!filteredProduct.length)
      throw new Error(`${searchProduct.value} product was not found`);
  } catch (e) {
    container.textContent = e.message || "Please try again later";
  }
});

/**sorting price amount highest to lowest or the opposite */
let isToggle = false;
sortingByAmount.addEventListener("click", () => {
  try {
    if (!allProducts) throw new Error("Please try again later");
    if (!isToggle) {
      allProducts.sort((a, b) => b.price - a.price);
      sortingByAmount.textContent = "Sorted by highest amount";
      isToggle = true;
    } else {
      allProducts.sort((a, b) => a.price - b.price);
      sortingByAmount.textContent = "Sorted by lowest amount";
      isToggle = false;
    }
    displayProducts(allProducts);
  } catch (e) {
    container.textContent = e.message || "We are working on this issue";
  }
});

/** cart functionality */
function addToCart(product) {
  try {
    /**for checkout */
    let checkoutItems = JSON.parse(localStorage.getItem("checkout")) || [];

    checkoutItems.push(product);
    localStorage.setItem("checkout", JSON.stringify(checkoutItems));
    document.querySelector("[counter]").textContent = checkoutItems.length || 0;
  } catch (e) {
    console.error(e);
    alert("Unable to add to cart");
  }
}
window.onload = () => {
  checkoutItems = JSON.parse(localStorage.getItem("checkout")) || [];
  document.querySelector("[counter]").textContent = checkoutItems.length || 0;
};
