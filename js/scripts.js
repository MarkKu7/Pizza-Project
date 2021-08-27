function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.toppingCost = function() {
  for (let i = 0; i < this.toppings.length; i++) {
    this.price += 1;
  }
}

Pizza.prototype.sizeCost = function() {
  const stPrice = 10;
    if (this.size === "Large (14 inches)") {
      this.price = stPrice + 5;
    } else if (this.size === "Medium (12 inches)") {
      this.price = stPrice + 3;
    } else {
      this.price = stPrice + 1;
    }
  }

Pizza.prototype.totalPrice = function() {
  this.sizeCost();  
  this.toppingCost(); 
}
$(document).ready(function(){
  $("form#SelectOptions").submit(function(event){
    event.preventDefault();
      const size = $("#size").val();
      const toppings = $('input:checkbox[name=toppings]:checked').map(function() {
        return this.value;
      });

      let displayPrice = new Pizza(size, toppings);
      displayPrice.totalPrice();
      $("#totalprice").html(`<p>Your total is $${displayPrice.price}</p>`);
  });
});