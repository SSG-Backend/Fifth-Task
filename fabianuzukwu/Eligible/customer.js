function isEligible(location, status){
    if (location< 1 || status === "active" && location > 10 || status === "inactive" && location >5){
        console.log('Not Eligible');
    }else{
        console.log('Eligible');
    }
}

isEligible(10, "inactive");