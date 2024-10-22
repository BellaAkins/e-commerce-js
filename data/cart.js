export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    },

    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    },
  ];
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function addToCart(productId) {
  //Use productId as parameter cause it was defined outside the scope
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem; //To check if product is already in the cart
    }
  });

  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}` //template string so we can use ${}
  );

  const quantity = Number(quantitySelector.value);
  if (matchingItem) {
    //   matchingItem.quantity += 1;
    matchingItem.quantity += quantity; //If matching item is in the cart increase it by quantity(which is the selector)
  } else {
    //if it is not in the cart push it
    cart.push({
      theProductName: productId,
      quantity: quantity,
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = []; //create a new array

  //Then loop through the cart
  //Then add each product to the new array, except it has this productId(the one we want to removeFromCart)

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      /* if cartItem.productId is not equal to the productId(the one we want to removeFromCart */
      newCart.push(cartItem); //then we add to new array
    }
  });
  //Result of this loop above is it will contain the cart item that do not match productId(that is removing it from cart)
  cart = newCart;
  saveToStorage();
}
