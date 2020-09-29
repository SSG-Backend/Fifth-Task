const formatPrice = (value, currency) => {
    if(!currency) return 'Currency symbol needed';
    let newValue = Number(value).toFixed(2);

    return `${currency}${newValue}`;
};