export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceCents: 0, //since it is free
  },
  {
    id: "2",
    deliveryDays: 3,
    priceCents: 499,
  },
  {
    id: "3",
    deliveryDays: 1,
    priceCents: 999,
  },
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}
/*
return deliveryOptions//so it can be used outside the function
deliveryOptions[0] //to use the 1st delivery option i.e the free one if we don't have a delivery option;*/
