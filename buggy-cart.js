
const cart = [
  { name: "Notebook", price: "1500", qty: 2 },
  { name: "Pen", price: 300, qty: 5 },
  { name: "Bag", price: 12000, qty: 1 },
];

function getSubtotal(items) {
  let subtotal = 0;

  // Bug fix 1: Changed <= to < because items[3] does not exist.
  // The Console error showed that the code tried to read an undefined item's price.
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].qty;
  }

  return subtotal;
}

function getDiscount(subtotal) {
  // Bug fix 2: Check the higher discount threshold first.
  // Otherwise, the 20% discount condition would never be reached.
  if (subtotal > 20000) return 0.2;
  else if (subtotal > 10000) return 0.1;

  return 0;
}

function getTotal(items) {
  const subtotal = getSubtotal(items);
  const discount = getDiscount(subtotal);

  // Bug fix 3: discount is a rate, so calculate the discount amount first.
  const total = subtotal - subtotal * discount;

  return total;
}

// Risky data value: "1500" is a string, but multiplication converts it to a number.
// If we used + instead, JavaScript could concatenate strings and produce a wrong result.

console.log("Subtotal:", getSubtotal(cart));
console.log("Total:", getTotal(cart));
