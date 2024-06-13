let content = document.querySelector("[all-content]");
const searchProduct = document.querySelector("[data-search-input]");
const sortingByAmount = document.querySelector("[data-sort-price]");

let allProducts = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    productName: "Retinol Sculpting Serum",
    category: "serum",
    volume: "50ml",
    details:
      "0.3% concentration, amino-peptides, hydroxyacids, glycerin, vitamin E",
    description:
      "Reduces the appearance of fine lines, improves skin elasticity, and helps to reduce the appearance of pores.",
    price: 299,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/retinoid.jpg",
  },
  {
    id: 2,
    productName: "Skin Brightening set",
    category: "pigmentation",
    volume: "30ml, 30ml, 50ml, 50ml",
    details:
      "vitamin C, glycolic acid, green tea extract, peptides, niacinamide",
    description:
      "In addition to reducing hyperpigmentation, using these products in combination improves skin texture, exfoliates, and helps with skin elasticity.",
    price: 500,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/skin-brightening-set.jpg",
  },
  {
    id: 3,
    productName: "Daily Microfoliant",
    category: "cleanser",
    volume: "130ml",
    details: "oatmeal, jojoba beads, glycerin, ceramides ",
    description:
      "The inclusion of oatmeal allows to soothe and calm irritated skin, while stimulating blood circulation with the help of tiny crystals.",
    price: 220,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/mathilde-langevin-FDRaYqiTY1k-unsplash.jpg",
  },
  {
    id: 4,
    productName: "Niacinamide 10% + Zinc 1%",
    category: "moisture",
    volume: "100ml",
    details: "niacinamide, zinc, vitamin B",
    description:
      "A form of vitamin B3, the combination of niacinamide and zinc helps to improve skin elasticity, reduce inflammation, and improve hyperpigmentation.",
    price: 255,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/niacinamide.jpg",
  },
  {
    id: 5,
    productName: "Hydrating Mask",
    category: "moisture",
    volume: "100ml",
    details: "hyaluronic acid, squalane, sorbitol, chamomile",
    description:
      "This luxurious treatment provides intense moisture to dry, thirsty skin, leaving it feeling soft, supple and refreshed.",
    price: 240,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/shishoka-senk-4zLq5ef2NXc-unsplash.jpg",
  },
  {
    id: 6,
    productName: "Brightening Eye Cream",
    category: "pigmentation",
    volume: "80ml",
    details: "vitamin C, caffeine, peptides, grape seed extract",
    description:
      "Helps to address dark circles, puffiness, and fine lines around the delicate eye area.",
    price: 180,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/eye-cream.jpg",
  },
  {
    id: 7,
    productName: "Daily Moisturiser",
    category: "moisture",
    volume: "200ml",
    details: "fragrance-free, hyaluronic acid, licorice extract",
    description:
      "With its unique blend of ingredients, this moisturiser helps to lock in moisture, leaving skin feeling refreshed and revitalised.",
    price: 289,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/day-cream.jpg",
  },
  {
    id: 8,
    productName: "Green Tea Spritz",
    category: "hydration",
    volume: "50ml",
    details: "green tea extract, vitamin E, ceramides",
    description:
      "A refresher for multiple uses during the day, this spritz offers light hydration, soothing against harsh weather and restoring the skin's barrier.",
    price: 130,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/skin-spritz.jpg",
  },
  {
    id: 9,
    productName: "Make-Up Care Set",
    category: "moisture",
    volume: "50ml, 80ml, 50ml, 100ml",
    details: "azelaic acid, foundation, hyaluronic acid, vegan",
    description:
      "An all-in-one care set that includes all-coverage foundation, a brightening formula, hyaluronic acid and a natural surface hydration formula.",
    price: 659,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/saher-suthriwala-5ar4S0ZhmDk-unsplash.jpg",
  },
  {
    id: 10,
    productName: "Regenerating Moisturiser",
    category: "moisture",
    volume: "400ml",
    details: "hypo-allergenic, fragrance-free, retinol, vitamin C, glycerin",
    description:
      "A combination of ingredients that help to repair and restore the skin, while additionally providing long-lasting hydration and antioxidant benefits.",
    price: 250,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/regenerating-moisturiser.jpg",
  },
  {
    id: 11,
    productName: "Clay Detox Scrub",
    category: "cleanser",
    volume: "200ml",
    details: "kaolin clay, charcoal, tea tree oil, honey, acne",
    description:
      "Gently exfoliates and removes dead skin cells, revealing smoother and brighter skin, unclogging pores and reducing acne. ",
    price: 100,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/the-tonik-07BEYT2hjGw-unsplash.jpg",
  },
  {
    id: 12,
    productName: "Hydro-boost Moisturiser",
    category: "hydration",
    volume: "50ml",
    details: "hyaluronic acid, glycerin, aloe vera",
    description:
      "Keep your skin hydrated with all the healthy benefits of this hydro-boost moisturiser that keeps skin supple, hydrated and soft.",
    price: 190,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/hydro-boost.jpg",
  },
  {
    id: 13,
    productName: "Acne Treatment Set",
    category: "cleanser",
    volume: "30ml, 50ml, 350ml",
    details: "salicylic acid, benzoyl peroxide, tea tree oil, ferulic acid",
    description:
      "Get clear, radiant skin with the powerful formula and combination of this treatment set, combatting acne-causing bacteria and reducing inflammation.",
    price: 530,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/acne-treatment-set.jpg",
  },
  {
    id: 14,
    productName: "3-Step Nighttime Care",
    category: "moisture",
    volume: "20ml, 50ml, 80ml",
    details: "aloe vera, vitamin E, lavender",
    description:
      "Get your skin ready for bed with this 3-step solution that allows for gentle exfoliatioin, providing antioxidant protection and moisture lock-in.",
    price: 320,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/3step-morning-care.jpg",
  },
  {
    id: 15,
    productName: "Refreshing Aloe Skin Cream",
    category: "hydration",
    volume: "70ml",
    details: "aloe vera, glycerin, essential oil, hyaluronic acid",
    description:
      "This rich cream is perfect for sensitive skin that's been irritated by environmental stressors or harsh skincare products.",
    price: 160,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/refreshing-aloe-cream.jpg",
  },
  {
    id: 16,
    productName: "Avocado Eye Cream",
    category: "pigmentation",
    volume: "30ml",
    details: "avocado, vitamin E, vitamin C, caffeine",
    description:
      "To help reduce fine lines and puffiness beneath the eyes, look no further than this product.",
    price: 90,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/avo-eye-cream.jpg",
  },
  {
    id: 17,
    productName: "Rapid Wrinkle Repair",
    category: "hydration",
    volume: "80ml",
    details: "rosewater, niacinamide, hyaluronic acid",
    description:
      "Say goodbye to fine lines and hello to youthful-looking skin with this clinically tested formula containing a blend of advanced peptides and antioxidants.",
    price: 210,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/rapid-wrinkle-repair.jpg",
  },
  {
    id: 18,
    productName: "Sensitive Skincare Set",
    category: "moisture",
    volume: "300g, 150g, 130ml",
    details: "aloe vera, glycerin, antioxidants",
    description:
      "Our soothing Sensitive Skincare Set is specifically designed for those with sensitive skin, providing gentle, non-irritating care that soothes and calms even the most delicate skin.",
    price: 420,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/sensitive-skin-set.jpg",
  },
  {
    id: 19,
    productName: "Hydrating Face Mist",
    category: "hydration",
    volume: "59ml each",
    details: "aloe vera, rosewater, chamomile, green tea",
    description:
      "Quench your skin's thirst for moisture, with out assortment of hydrating mists, that both prepares skin for product and provides instant hydration.",
    price: 100,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/hydrating-mist.jpg",
  },
  {
    id: 20,
    productName: "Full Cleansing Set",
    category: "cleanser",
    volume: "80ml, 30ml, 100ml, 30ml, 90ml, 80ml",
    details: "vitamin C, charcoal, ceramides, hyaluronic acid, niacinamide",
    description:
      "A complete cleansing set including a charcoal cleanser, exfoliating rub, recovery oil, dark circle defense, moisturising balm, and anti-wrinkle serum.",
    price: 640,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/cleansing-set.jpg",
  },
  {
    id: 21,
    productName: "Pure Vitamin C Serum",
    category: "pigmentation",
    volume: "20g",
    details: "vitamin C",
    description:
      "Unlock the power of vitamin C with our pure, clinically-tested serum, designed to achieve a radiant, youthful complexion that is both bright and healthy-looking.",
    price: 220,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/vitamin-c-serum.jpg",
  },
  {
    id: 22,
    productName: "Eco-Sun SPF50 Sunscreen",
    category: "moisture",
    volume: "50ml",
    details: "sunscreen, green tea, aloe vera, zinc",
    description:
      "A non-greasy, broad-spectrum sunscreen that provides long-lasting protection against UVA and UVB rays for optimal skin health.",
    price: 180,
    img_url:
      "https://robynainsley21.github.io/images/ecommerce-skincare/sunscreen.jpg",
  },
];

localStorage.setItem("products", JSON.stringify(allProducts));

function displayProducts(products) {
  try {
    products.forEach((product) => {
      content.innerHTML += `
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
  } catch (error) {
    content.textContent = "Please try again later";
    console.error("Error loading content: ", error);
  }
}
displayProducts(allProducts);

/**searching for item on user input */
searchProduct.addEventListener("keyup", () => {
  try {
    const searchTerm = searchProduct.value.toLowerCase();
    let filteredProducts = allProducts;

    if (searchTerm.length > 0) {
      filteredProducts = allProducts.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm)
      );
    }

    content.innerHTML = "";
    displayProducts(filteredProducts);

    if (!filteredProducts.length)
      throw new Error(`${searchTerm} product was not found`);
  } catch (e) {
    content.textContent = e.message || "Please try again later";
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
    content.innerHTML = "";
    
    displayProducts(allProducts);
  } catch (e) {
    content.textContent = e.message || "We are working on this issue";
  }
});

/** cart functionality */
function addToCart(product) {
  try {
    /**for checkout */
    let checkoutItems = localStorage.getItem("checkout");
    if (checkoutItems) {
      checkoutItems = JSON.parse(checkoutItems);
    } else {
      checkoutItems = [];
    }

    checkoutItems.push(product);
    localStorage.setItem("checkout", JSON.stringify(checkoutItems));
    document.querySelector("[counter]").textContent = checkoutItems.length || 0;
  } catch (e) {
    console.error(e);
    alert("Unable to add to cart");
  }
}

window.onload = () => {
  let checkoutItems = localStorage.getItem("checkout");
  if (checkoutItems) {
    checkoutItems = JSON.parse(checkoutItems);
  } else {
    checkoutItems = [];
  }
  document.querySelector("[counter]").textContent = checkoutItems.length || 0;
};
