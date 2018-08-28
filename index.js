var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 function getItemPrice(max) {
    return Math.floor(Math.random() * Math.floor(max));
 } 
var newItem = {itemName:`${item}`, itemPrice: getItemPrice(100)};
cart.push(newItem)
return cart;
}

//"passed in string" needs to be dynamic --> hints at interpolation.
// "new object *representing* the item" --> new object doesn't have to/ can't have the same name as the argument passed in.
//"As more items are added.." --> hints @ cart.push
// Pay attention to format in questions! 




function viewCart() {
var list = [];
var i = 0;
 if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  
 else {

   list.push(`In your cart, you have ${cart[i].itemName} at ${cart[i].itemPrice}`)
}
    return list;
}

function total() {
  
}

function removeFromCart(item) {
  for (var i = 0; i < 0; i++) {
  var firstItemName = getCart()[i].itemName
  var secondItemName = getCart()[i].itemName
  if (i > 0){}
  else {}
  }
}

function placeOrder(cardNumber) {
  var total = [];
  if (cardNumber === 0) {
  return "Sorry we don't have a credit card on file for you."
    }
  
}
