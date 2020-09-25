//TASK ONE
class PrettyPrint {
  constructor() {/*alert(this)*/}
  
  toString() {
    return "[object Michael]";
  }
  
}
// var p = new PrettyPrint();
// alert(p)


// OR..
function Pretty(){}

Pretty.prototype = {
  toString: function() {
    return "[object Pretty]";
  }
};
//var p = new Pretty();
//alert(p)




// TASK TWO
function isEligible(no_of_miles_away, is_a_member) {
  if(typeof no_of_miles_away !== "number") {
    throw new Error("Please provide a number for customer's location in miles away");
  }
 
  let eligibility = false;
  if(no_of_miles_away > 1 && no_of_miles_away <= 5) {
    eligibility = true;
  } else if(no_of_miles_away <= 10 && is_a_member) {
    eligibility = true
  }
  console.log(eligibility 
              ? "Congratulations! You qualify for free delivery"
              : "Sorry, free delievery is not availbale in your location!");
  return eligibility;
} 
// alert(isEligible(9, true))






// TASK THREE

function formatPrice(price, currency) {
  price = Number(price); //Convert to number in case its a string
  if(isNaN(price) || typeof currency !== "string") {
    throw new Error("Please supply current arguments");
  }
  return `${currency}${price.toFixed(2)}`;
}
//alert(formatPrice(21, "$"))




// THE FOURTH TASK

function stackoverflow(hay, ...stack) {
/*I really don't understand this part correctly*/
  function multiply(current, next) {
     return current * next;
  }
  return stack.reduce(multiply, hay);
}

// alert(stackoverflow(1, 2, 3, 4, 5, 6))