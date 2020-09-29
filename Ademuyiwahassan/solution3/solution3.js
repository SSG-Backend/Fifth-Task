const toCurrency = (number, currency, lang = undefined) => 
      Intl.NumberFormat(lang, { style : 'currency', currency }).format(number);

const result = toCurrency(123456.789, 'USD', 'en-us');

console.log(result)