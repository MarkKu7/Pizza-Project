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

//UI 

$(document).ready(function() {
  $("form#selectSize").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val
    const toppings = $('input:checkbox[name=toppings]:checked').map(function() {
      return this.value;
    }) 

    let finalPrice = new Pizza(size, toppings);
    finalPrice.totalPrice();
    $("#finalprice").html(`<p>Your pizza costs $${finalPrice.price}</p>`);
  });
});
  