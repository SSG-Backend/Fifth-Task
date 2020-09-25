// Create a function that will determine whether the customers of a grocery store are
// eligible for free home delivery. The store only delivers to customers who are 
// located within 5 miles of the store. To make this exercise more interesting, 
// the store recently decided to provide free delivery for customers located 
// within 10 miles of the store, but only if those customers have an active membership
// for their loyalty program. Moreover, if customers are within 1 mile of the store,
// they aren't eligible for free home delivery, regardless of their membership status.


// declare two variables that takes two inputs
const locationmiles = prompt("How many miles are you away from our store? ");
const memberstatus = prompt("Do you have an active membership? ");

    if (locationmiles <= 1) {
        console.log('You are not eligible for free home delivery')
    }else if (locationmiles <= 5) {
        console.log(' Congratulations You are eligible for free home delivery')
    }else if (locationmiles <=10 && memberstatus === "yes" || "Yes" || "YES" ) {
        console.log(' Congratulations You are eligible for free home delivery')
    }else if (locationmiles <= 1) {
        console.log('You are not eligible for free home delivery')
    }else {
        console.log('You are not eligible for free home delivery')
    }