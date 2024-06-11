const checkoutItems = JSON.parse(localStorage.getItem("checkout")) || []
const checkoutBox = document.querySelector('[checkout-content]')
const payBtn = document.querySelector('[purchase-btn]')

console.log(checkoutItems);

checkoutItems.forEach(product => {
    checkoutBox.innerHTML += `
        <tr class="selected_prod" id="${product.id}">
            <th scope="row"><img src="${product.img_url}" alt="checkout-img"/></th>
            <td>${product.productName}</td>
            <td>R${product.price}</td>
            <td>insert quantity here</td>
            <td>total here</td>
            <td><button class="btn btn-danger" onclick="removeItem(${product.id})">Remove</button></td>
        </tr>
    `
})

function removeItem(itemId){
    try {
        console.log(`this item ${itemId} was removed`);
        let deletedProdIndex = checkoutItems.findIndex(product => product.id === itemId)
    
        if(deletedProdIndex !== -1){
            checkoutItems.splice(deletedProdIndex, 1)
            localStorage.setItem("checkout", JSON.stringify(checkoutItems))
            const removedRow = document.getElementById(itemId)
            removedRow.parentNode.removeChild(removedRow)
        }
    } catch (error) {
        alert('Item could not be removed. Please try again.')
        console.error("Item could not be removed", error);
    }

}

payBtn.addEventListener('click', () => {
    if(checkoutItems.length > 0){
        alert("Thank you for purchasing.")
    }else{
        alert("Your cart is empty. Please add a product.")
    }
})