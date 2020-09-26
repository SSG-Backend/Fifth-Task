free_delivery = function (distance, status) {
    if (distance > 1 && distance <= 5) {
        return true;
    }
    else if (status == "active") {
        if (distance > 1 && distance <= 10) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

console.log(free_delivery(4, "inactive"));
console.log(free_delivery(9, "inactive"));
console.log(free_delivery(1, "inactive"));
console.log(free_delivery(1, "active"));
console.log(free_delivery(4, "active"));
console.log(free_delivery(7, "active"));
console.log(free_delivery(15, "inactive"));
console.log(free_delivery(14, "active"));