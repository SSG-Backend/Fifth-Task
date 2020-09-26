// Create a function within an object that provides a "pretty print" facility when using the object
// in circumstances that require a string value. The function will utilize the toString capability.

let obj = {meaningOfLife: 42,
    foo: "bar",
    child: {me: "you", other: {him: "her"}},
    toString: Object.prototype.toString};
let str = obj + "";
console.log(str);

let objToString = function(obj, indent) {
    obj = obj || this;
    indent = indent || "";
    let res = "";
    for (let k in obj){
        if (typeof obj[k] == "object"){
            res += indent + k + " = {\n";
            res += objToString(obj [k], indent + "- ");
            res += indent + "}";
        } else if (typeof obj [k] != "function") {
            res += indent + k + " = " + obj [k];
        } else {
            continue;    
        }
        res += "\n";
    }
    return res;
}
// obj.toString = objToString;
// obj + "";
console.log(obj)
console.log(objToString);