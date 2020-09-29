const storeHomeDelivery = (distance, activeMembership=false) => {
    if(distance > 1 && distance <=5) {
        return 'You are eligible for home delivery'
    };

    if(distance > 5 && distance <= 10 && activeMembership === true) {
        return 'You are eligible for home delivery'
    };

    return 'Sorry, you are not eligible for home delivery';
};