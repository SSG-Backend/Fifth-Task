let Person = {
    firstName : "",
    lastName : "",
    age : 20,
    istoString: function (){
        console.log(`Hi , my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`);
    }
}

let Fabian = Object.create(Person);
Fabian.firstName = "Ifechukwu";
Fabian.lastName = "Uzukwu";
Fabian.age = 23;
Fabian.istoString();