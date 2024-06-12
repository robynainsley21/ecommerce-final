const adminContainer = document.getElementById("admin-content");
const searchInput = document.querySelector("[admin-search]");
const addBtn = document.querySelector("[add-item]")
const newItem = document.querySelector("[add-item-content]")

const allItems = JSON.parse(localStorage.getItem("products"));
localStorage.setItem("products", JSON.stringify(allItems));

allItems.forEach((product) => {
  adminContainer.innerHTML += `
        <tr class="selected_prod" id="${product.id}">
            <th scope="row"><img src="${product.img_url}" alt="checkout-img" loading="lazy"/></th>
            <td>${product.productName}</td>
            <td>${product.category}</td>
            <td>R${product.price}</td>
            <td><button class="btn btn-danger mx-1">Edit</button><button class="btn btn-success" onclick="removeItem(${product.id})">Remove</button></td>
    </tr>
    `;
});

function removeItem(itemId) {
  try {
    console.log(`this item ${itemId} was removed`);
    let deletedProdIndex = allItems.findIndex(
      (product) => product.id === itemId
    );

    if (deletedProdIndex !== -1) {
      allItems.splice(deletedProdIndex, 1);
      localStorage.setItem("products", JSON.stringify(allItems));
      const removedRow = document.getElementById(itemId);
      removedRow.parentNode.removeChild(removedRow);
    }
  } catch (error) {
    alert("Item could not be removed. Please try again.");
    console.error("Item could not be removed", error);
  }
}

addBtn.addEventListener('click', () => {
    console.log('this button is working');
    const modalContent = `
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" add-item-content>
                            <form>
                                <div class="form-group">
                                    <label for="productName">Product Name</label>
                                    <input type="text" class="form-control" id="productName" placeholder="Enter product name">
                                </div>
                                <div class="form-group">
                                    <label for="category">Category</label>
                                    <input type="text" class="form-control" id="category" placeholder="Enter category">
                                </div>
                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" class="form-control" id="price" placeholder="Enter price">
                                </div>
                                <div class="form-group">
                                    <label for="imgUrl">Image URL</label>
                                    <input type="text" class="form-control" id="imgUrl" placeholder="Enter image URL">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeModal">Close</button>
                            <button type="button" class="btn btn-primary" id="saveNewItem">Save changes</button>
                        </div>
                </div>
            </div>
            </div>
    `

    /**creating the modal element */
    const modalContainer = document.createElement('div')
    modalContainer.innerHTML = modalContent
    document.body.appendChild(modalContainer)

    const newItemModal = new bootstrap.Modal(document.getElementById('newItemModal'), {
        keyboard: false
    })

    newItemModal.show()

    const closeModalBtn = document.getElementById('closeModal')
    closeModalBtn.addEventListener('click', () => {
        newItemModal.hide()
    })

    /**saving the item once edited */
    const saveItemBtn = document.getElementById('saveNewItem')
    saveItemBtn.addEventListener('click', () => {
        /**fetching the form values */
        const productName = document.getElementById('productName').value
        const category = document.getElementById('category').value
        const price = document.getElementById('price').value
        const imageUrl = document.getElementById('imgUrl').value

        /**creating an object for the new item */
        const newItem = {
            imgUrl: imageUrl,
            id: Date.now(),
            productName,
            category,
            price
        }

        /**saving the new item to local storage */
        allItems.push(newItem)
        localStorage.setItem("products", JSON.stringify(allItems))

        /**automatically closing the modal once the item is added */
        newItemModal.hide()

        adminContainer.innerHTML += `
                        <tr class="selected_prod" id="${newItem.id}">
                <th scope="row"><img src="${newItem.img_url}" alt="checkout-img" loading="lazy"/></th>
                <td>${newItem.productName}</td>
                <td>${newItem.category}</td>
                <td>R${newItem.price}</td>
                <td><button class="btn btn-danger mx-1">Edit</button><button class="btn btn-success" onclick="removeItem(${newItem.id})">Remove</button></td>
            </tr>
        `
    })

})