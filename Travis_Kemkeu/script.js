//Pretty Print 

function Person(first, last, pet_name) {
    this.firstName = first;
    this.lastName = last;
    this.job = new Job(pet_name);
    this.fullname = function () {
        return this.lastName + " " + this.firstName;
    }
}

function Job(name) {
    this.Name = name;
}

function printObject(obj) {
    console.log('My object: ', obj);
}

person = new Person("Travis","Ismail","Ben");
printObject(person);




// Home delivery

function isEligible(no_of_miles_away, is_a_member) {
    if(typeof no_of_miles_away !== "number") {
      throw new Error("Please provide a number for customer's location in miles away");
    }
   
    let eligibility = false;
    if(no_of_miles_away > 1 && no_of_miles_away <= 5) {
      eligibility = true;
    } else if(no_of_miles_away <= 10 && is_a_member) {
      eligibility = true
    }
    console.log(eligibility 
                ? "Congratulations! You qualify for free delivery"
                : "Sorry, free delievery is not availbale in your location!");
    return eligibility;
  } 


//Currency formatter

const formatPrice = (value, currency) => {
    if(!currency) return 'Currency symbol needed';
    let newValue = Number(value).toFixed(2);

    return `${currency}${newValue}`;
};


// Stack Overflow

    //will complete it soons