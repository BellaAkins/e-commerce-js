import { cart } from "../../data/cart.js";

export function renderCheckOutHeader() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  const checkoutHeaderHTML = `
   <div class="checkout-header">
      <div class="header-content">
        <div class="checkout-header-left-section">
          <a href="index.html">
            <!-- <img class="amazon-logo" src="images/amazon-logo.png" />-->
            <h1 class="amazon-logo logo-text">Swift<span>Buy</span></h1>
            <!--  <img
              class="amazon-mobile-logo"
              src="images/amazon-mobile-logo.png"
            />-->
            <h1 class="amazon-mobile-logo">Swi<span>Buy</span></h1>
          </a>
        </div>

        <div class="checkout-header-middle-section">Your Cart</div>

        <div class="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
    `;

  const displayCheckoutHeaderHTML = document.querySelector(".checkout-header");
  displayCheckoutHeaderHTML.innerHTML = checkoutHeaderHTML;
}
