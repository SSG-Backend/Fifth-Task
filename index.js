//jshint esversion:6

// question 1
var obj = {
    name: "Joshua",
    hobby: "Being good",
    age: 19,
    toString: Object.prototype.toString
};
var str = obj + "";
console.log(str);

var objToString = function(obj, indent) {
    obj = obj || this;
    indent = indent || "";
    var res = "";
    for (var k in obj) {
        if (typeof obj[k] == "object") {
            res += indent + k + " = {\n";
            res += objToString(obj[k], indent + "- ");
            res += indent + "}";
        } else if (typeof obj[k] != "function") {
            res += indent + k + " = " + obj[k];
        } else {
            continue;
        }
        res += "\n";
    }
    return res;

};

obj.toString = objToString;
obj + "";






//question 3 
function eligible(_mile, _membership) {
    if (_mile < 2 && _membership == "active") {
        console.log("Not eligible for free delivery");

    } else if (_mile < 11 && _membership == "active") {
        console.log("Eligible");

    } else {
        console.log("Not eligible!!!");
    }
}




//question 4
function user_input(input1) {
    var con = Number(input1); //converts the input to number if inputed as string
    var n = con.toFixed(2); //does the approximation to 2 decimal places 
    var out = console.log("$" + n);

}

// question5