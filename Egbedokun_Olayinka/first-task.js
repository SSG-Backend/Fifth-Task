const myObject = {
    toString() {
        return JSON.stringify(this, undefined, 2);
    },
    name: 'yinka',
    gender: 'male'
};

console.log(myObject.toString());