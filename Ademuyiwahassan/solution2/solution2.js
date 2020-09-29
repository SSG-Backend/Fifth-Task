//Create a function that will determine whether the customers of a grocery store are eligible for free home delivery. The store only delivers to customers who are located within 5 miles of the store. To make this exercise more interesting, the store recently decided to provide free delivery for customers located within 10 miles of the store, but only if those customers have an active membership for their loyalty program. Moreover, if customers are within 1 mile of the store, they aren't eligible for free home delivery, regardless of their membership status.

var dist = prompt("Enter your distances in miles");
var actMem = prompt("Are you an active member of our loyalty program?");

function custElig(dist, actMem) {
    if ((dist>1) && (dist<=5)){
        alert("You are eligible for free delivery!");
    }
    else if ((dist<=10 && dist>1) && (actMem.indexOf("yes")!== -1)) {
        alert("You are eligible for free delivery");   
    } 
    else {
        alert("We are really sorry, you are not eligible for free delivery");
    }
}
custElig(dist, actMem);
