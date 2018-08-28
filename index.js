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
var itemListing = `${cart[i].itemName} at $${cart[i].itemPrice}`
 
 if (cart.length === 1) {
   list.push(`In your cart, you have ${itemListing}.`) 
}

 else if (cart.length === 2) {
   list.push(`In your cart, you have ${itemListing} and ${itemListing}.`)
}

else{
  list.push(`In your cart, you have ${itemListing}, ${itemListing}, and ${itemListing}.`)
}
}
return list;
}

function total() {
  for (var i = 0; i < cart.length; i++){
    
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
    var cart = [];
    return cart 
 }
  if (cardNumber > 0) {
  return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
  console.log(emptyCart())  
}
