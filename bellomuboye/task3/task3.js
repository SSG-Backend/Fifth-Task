// Create a function that can take a numeric value parameter as a number or string 
// and format it into a price value with two-decimal precision.
// In order to prepend a currency symbol, the function will accept it as a parameter.

function formatAsCurrency(currency, price) {
	let response = { status: "", message: ""};
	price = Number(price);

	if (typeof currency != "string" || Number.isNaN(price)) {
		response.status = "failure";
		response.message = "invalid argument(s)"
	} else {
		response.status = "success";
		response.message = currency + price.toFixed(2);
	}

	return response;
}

console.log(formatAsCurrency("N", 2).message);