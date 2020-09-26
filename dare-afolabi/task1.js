let person = {
    firstname: 'kunle',
    lastname: 'bamtefa',
    age: 20,
    tribe: 'yoruba',
    state: 'ogun',
    favcolor: 'brown',
    fullname: function() {console.log(`I am ${person.firstname} ${person.lastname}`);},
    toString: function() { return JSON.stringify(person, null, 4); }

};


// Test code
console.log(String(person));
