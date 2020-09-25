function tofixprice(price, inputtedCurrency) {

    var currentCurrency = inputtedCurrency;
    
    if(typeof price === 'number' || typeof price === 'string') {

        let stringPrice = price.toString();

        let numericPattern = /^\d+(\.\d{1,2})?$/;
        if(numericPattern.test(stringPrice)) {
            var twoDecimalPrice = parseFloat(stringPrice).toFixed(2);

            if (currentCurrency && typeof currentCurrency === 'string') {
                var desiredCurrency = currentCurrency.toUpperCase();
                if (desiredCurrency === 'USD' || desiredCurrency === 'EUR' || desiredCurrency === 'GBP'|| desiredCurrency === 'JPY') {
                return Intl.NumberFormat("en", { style: 'currency', currency: desiredCurrency }).format(parseFloat(twoDecimalPrice));
                } else {
                    return Intl.NumberFormat("en", { style: 'currency', currency: 'USD' }).format(parseFloat(twoDecimalPrice));
                }
                
            } else {
                return Intl.NumberFormat("en", { style: 'currency', currency: 'USD' }).format(parseFloat(twoDecimalPrice));
            }

        } else {
            return Intl.NumberFormat("en", { style: 'currency', currency: 'USD' }).format(parseFloat(0.00));
        }
    } else {
        return Intl.NumberFormat("en", { style: 'currency', currency: 'USD' }).format(parseFloat(0.00));
    }

}


// Test code
console.log(tofixprice(5678.3, "eur"));
