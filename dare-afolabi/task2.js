function isEligible(customer) {
    if (customer.distance > 1 && customer.distance <= 10 && customer.activeLoyaltyProgram === true) {
        console.log(`Customer is eligible for free home delivery`);
        return true;
    }else if (customer.distance <= 1) {
        console.log(`Customer is NOT eligible for free home delivery but eligible for PAID HOME DELIVERY.`);
        return false;
    }else if (customer.distance > 1 && customer.distance <= 5 && customer.activeLoyaltyProgram === false) {
        console.log(`Customer is NOT eligible for free home delivery but eligible for PAID HOME DELIVERY.`);
        return false;
    } else {
        console.log(`Customer is NOT eligible for free home delivery. NO HOME DELIVERY is available.`);
        return false;
    }
}


// Test code
let customer = {
    firstname: 'kunle',
    lastname: 'bamtefa',
    address: '20 Adeola Odeku Street, Victoria Island, Lagos',
    distance: 9,
    activeLoyaltyProgram: true

};

console.log(isEligible(customer));

