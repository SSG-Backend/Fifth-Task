// Create a function that will determine whether the customers of a grocery store are eligible for free home delivery. 
// The store only delivers to customers who are located within 5 miles of the store. 
// To make this exercise more interesting, the store recently decided to provide free delivery for customers located within 10 miles of the store,
// but only if those customers have an active membership for their loyalty program. 
// Moreover, if customers are within 1 mile of the store, they aren't eligible for free home delivery, regardless of their membership status.

function isEligible(distance, membershipStatus){
	let response = { status: "", message: ""};

	if (distance <= 1 || distance > 10) {
		response.status = "ineligible";
		response.message = "Not Eligible for Free Home Delivery"
	} else if (distance <= 5 || (distance < 10 && membershipStatus == "active")) {
		response.status = "eligible";
		response.message = "Congrats! You are eligible"
	} else if (distance < 10 && membershipStatus != "active") {
		response.status = "ineligible";
		response.message = "Get active on our loyalty program to be eligible";
	} else {
		response.status = "ineligible";
		response.message = "Response was out of criteria";
	}

	return response;
}

console.log(isEligible(9, "active").message);