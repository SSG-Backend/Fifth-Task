function Person(first, last, pet_name) {
    this.firstName = first;
    this.lastName = last;
    this.pet = new Pet(pet_name);
    this.fullname = function () {
        return this.lastName + " " + this.firstName;
    }
}

function Pet(name) {
    this.Name = name;
}

function printObject(obj) {
    console.log('My object: ', obj);
}

person = new Person("Felix", "Peter", "Bingo");
printObject(person);

