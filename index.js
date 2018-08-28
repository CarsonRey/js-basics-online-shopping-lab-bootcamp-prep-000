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
var newItem = {itemName:`${item}`, itemPrice: getItemPrice(100) + 1};

cart.push(newItem)

return `${item} has been added to your cart.`;
}

//"passed in string" needs to be dynamic --> hints at interpolation.
// "new object *representing* the item" --> new object doesn't have to/ can't have the same name as the argument passed in.
//"As more items are added.." --> hints @ cart.push
// Pay attention to format in questions! 




function viewCart() {
var list = [];
if (cart.length === 0) {
    return 'Your shopping cart is empty.'
}
for (var i = 0; i < cart.length; i++) {

 if (cart.length === 1) {
   list.push(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`) 
}

 else if (cart.length === 2) {
   list.push(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`)
}

else{
  list.push(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`)
}
return list;
}
}
// Needs to be explained much further. 


function total() {
  for (var i = 0; i < cart.length; i++){
    
    getCart()[i].itemPrice
    return 
  }
}

function removeFromCart(item) {
  for (var i = 0; i < 0; i++) {

  if (item === undefined){
    return `That item is not in your cart.`
  }
  else {
    cart.splice(item[i], 1)
    return cart
  }
  }
}

function placeOrder(cardNumber) {
 function emptyCart() {
   
    getCart() 
 }
  if (cardNumber > 0) {
  cart = [];
  return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
   
    }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
    
}
