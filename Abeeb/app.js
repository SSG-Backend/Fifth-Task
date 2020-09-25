// 1st Task
let obj = {
  firstName: "Abeeb",
  lastName: "Ayinla",
  state: {
    stateCode: 111,
    stateCapital: {
      name: "Umaya",
    },
  },
  toString: Object.prototype.toString,
};

let objStr = function (obj, otherOption) {
  obj = obj || this;
  otherOption = otherOption || "";
  let result = "";

  for (let m in obj) {
    if (typeof obj[m] == "object") {
      result += otherOption + m + "= {\n";
      result += objStr(obj[m], otherOption + "-");
      result += otherOption + "}";
    } else if (typeof obj[m] != "function") {
      result += otherOption + m + "=" + obj[m];
    } else {
      continue;
    }
    result += "\n";
  }
  return result;
};
obj.toString = objStr;
obj + "";

// 2nd Task
const isEligible = (miles, membership) => {
  if (miles > 5 && membership === true) {
    return "Customers are eligible for free delivery";
  } else if (miles > 5 && membership === false) {
    return "Customers must have an active membership also for free delivery";
  } else if ((miles <= 5 && membership === true) || membership === false) {
    return "Customers are NOT eligible for free delivery";
  }
};
let checkEligible = isEligible(6, true);
console.log(checkEligible);

// 3rd Task
const formatPrice = (price, currency) => {
  let priceSplit, priceInteger, priceDecimal;
  // Convert to 2 decimal place
  price = price.toFixed(2);

  //   split price to return array
  priceSplit = price.split(".");

  //   select the integer part
  priceInteger = priceSplit[0];

  if (priceInteger.length > 3) {
    //  Add comma separating the thousands and
    priceInteger =
      priceInteger.substr(0, priceInteger.length - 3) +
      "," +
      priceInteger.substr(priceInteger.length - 3, 3); // -> 2,000
  }

  //   select the decimal part
  priceDecimal = priceSplit[1];

  //   final format output
  return currency + priceInteger + "." + priceDecimal;
};

let p = formatPrice(1000, "$");
console.log(p);
