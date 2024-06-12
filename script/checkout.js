let checkoutItems = [];

let storedItems = localStorage.getItem("checkout");
if (storedItems) {
  checkoutItems = JSON.parse(storedItems);
}

const checkoutBox = document.querySelector("[checkout-content]");
const payBtn = document.querySelector("[purchase-btn]");
const allTotal = document.querySelector("[all-total]");

const productQuantity = {};

checkoutItems.forEach((product) => {
  /**if the product is already in the object */
  if (productQuantity[product.id]) productQuantity[product.id].quantity++;
  else productQuantity[product.id] = { product, quantity: 1 };
});

let totalPrice = 0;

Object.values(productQuantity).forEach(({ product, quantity }) => {
  const price = quantity * parseInt(product.price);
  totalPrice += price;
  checkoutBox.innerHTML += `
    <tr class="selected_prod" id="${product.id}">
      <th scope="row"><img src="${product.img_url}" alt="checkout-img"/></th>
      <td>${product.productName}</td>
      <td>${product.category}</td>
      <td>R${product.price}</td>
      <td>${quantity}</td>
      <td>R${price}</td>
      <td><button class="btn btn-danger" onclick="removeItem(${product.id})">Remove</button></td>
    </tr>
  `;
  console.log(product);
});

allTotal.innerHTML = `R${totalPrice}`;

function removeItem(itemId) {
  try {
    console.log(`this item ${itemId} was removed`);
    let deletedProdIndex = checkoutItems.findIndex(
      (product) => product.id === itemId
    );

    if (deletedProdIndex !== -1) {
      checkoutItems.splice(deletedProdIndex, 1);
      localStorage.setItem("checkout", JSON.stringify(checkoutItems));
      const removedRow = document.getElementById(itemId);
      removedRow.parentNode.removeChild(removedRow);

      const productToRemove = productQuantity[itemId];
      if (productToRemove.quantity > 1) {
        productToRemove.quantity--;
      } else {
        delete productQuantity[itemId];
      }

      /**when a product gets removed, price to be decreased */
      let newTotalPrice = 0;
      Object.values(productQuantity).forEach(({ product, quantity }) => {
        newTotalPrice += quantity * parseInt(product.price);
      });

      allTotal.textContent = `R${newTotalPrice}`;
    }
  } catch (error) {
    alert("Item could not be removed. Please try again.");
    console.error("Item could not be removed", error);
  }
}

payBtn.addEventListener("click", () => {
  if (checkoutItems.length > 0) {
    alert("Thank you for purchasing.");
  } else {
    alert("Your cart is empty. Please add a product.");
  }
});
