//Task One
class PrettyPrint {
	constructor() {/*alert(this)*/}

	toString() {
		return "[object Fad]"
	}
}
// var p = new PrettyPrint();
// alert(p)

//Task Two
function isEligible(no_of_miles_away, is_a_member) {
	if(typeof no_of_miles_away !== "number") {
		throw new Error("Please provide a number for customer's location in miles away");
	}

	let eligibility = false;
	if(no_of_miles_away > 1 && no_of_miles_away <= 5) {
		eligibility = true;
	}   else if(no_of_miles_away <= 10 && is_a_member) {
		eligibility = true
	}
	console.log(eligibility 
		? "Congratulation! Ypu qualify for free delivery"
		: "Sorry, free delivery is not available in your location!");
	return eligibility;		
}
// alert (is Eligible(9, true))

//Task Three
function formatPrice(price, currency) {
	price = Number(price); //Convert to number in case its a string
	if(isNAN(price) || typeof currency !== "string") {
		throw new Error("Please supply current arguments");
	}
	return ${currency}${price.toFixed(2)};
}
//alert(formatPrice(21, "$"))