function delivery(dist,ship){
    if (dist > 1 && dist < 5){
        return true;
    }else if (dist > 1 && dist < 10 && ship==true){
        return true;
    }else{
        return false
    }
}

function currency(price){
    var without_sign = Number(price.slice(1))
    return price.slice(0,1)+without_sign.toFixed(2);
    
}
if (delivery(4)==true){
    document.write("You are eligible for free delivery")
}else{
    document.write("Unfortunately, you are not eligible for free delivery. keep shopping to earn free delivery" )
}

document.write(currency("$34.567533"))