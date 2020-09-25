function currency(number, currency){
    currency = currency || "$"; //return a default value of $ if not provided
    number = Number(number); //convert the given number to a number data type

    // Validate if the parameters are valid values
    if (Number.isNaN(number) || typeof currency != "string"){
        return null;
    } else {
        console.log(currency + number.toFixed(2));
    }

}

currency(9.903);