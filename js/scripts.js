//Business Logic for pizza selection
let price = 0;

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.ToppingPrice = function() {
  for (let i = 0; i < this.toppings.length; i++) {
    this.price += 1;
  }
}

Pizza.prototype.SizePrice= function() {
  const stPrice = 10;
  if (this.size === "Large") {
    this.price = stPrice + 5;
  } else if (this.size === "Medium") {
    this.price = stPrice + 3;
  } else if (this.sizse === "Small") {
    this.price = stPrice + 1; 
  }
}

Pizza.prototype.totalPrice = function() {
  this.SizePrice;
  this.ToppingPrice;
}