import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utilities/money.js"; //one dot cause we are in the current folder
//For each cartitem generate this html
let allCartSummaryHTML = "";
cart.forEach((cartItem) => {
  const productId = cartItem.productId; //getting productId out of cartItem

  let matchingProduct; // to save the matchingProduct result

  products.forEach((product) => {
    if (product.id === productId) {
      //CHECK IF product.id (the product is the param NOT the array name) IS = TO OUR productId
      matchingProduct = product;
      //  console.log(matchingProduct); //if it matches then save it inthr matchingProduct variable make it equal tO the product we are looking for(THE PARAM)
    }
  });
  // console.log(matchingProduct);
  allCartSummaryHTML += `  
  <div class="cart-item-container 
  js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">Delivery date: Tuesday, June 21</div>

            <div class="cart-item-details-grid">
              <img
                class="product-image"
                src="${matchingProduct.image}"
              />

              <div class="cart-item-details">
                <div class="product-name">
                ${matchingProduct.name}
                </div>
                <div class="product-price">$${formatCurrency(
                  matchingProduct.priceCents
                )}</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${
                    cartItem.quantity
                  }</span> </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary delete-link" data-product-id="${
                    matchingProduct.id
                  }">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"              
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}"
                  />
                 
                  <div>
                    <div class="delivery-option-date">Tuesday, June 21</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}"
                  />
                  <div>
                    <div class="delivery-option-date">Wednesday, June 15</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}"
                  />
                  <div>
                    <div class="delivery-option-date">Monday, June 13</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
});

//console.log(allCartSummaryHTML);

const cartOrder = document.querySelector(".order-summary");
cartOrder.innerHTML = allCartSummaryHTML;

const deleteOrder = document.querySelectorAll(".delete-link");
deleteOrder.forEach((deleteLink) => {
  deleteLink.addEventListener("click", () => {
    const productId = deleteLink.dataset.productId;
    removeFromCart(productId);
    const cartItemContainer = document.querySelector(
      `.js-cart-item-container-${productId}`
    );

    console.log(cartItemContainer);

    cartItemContainer.remove();
    /*
    const cartContainer = document.querySelector(
      `.cart-item-container-${matchingProduct.id}`//do not use this because matchingProductId is not defined
    );*/
  });
});
