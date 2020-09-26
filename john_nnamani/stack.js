function foo() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

function infiniteRecursion() {
    infiniteRecursion()
}
infiniteRecursion();

foo("a", "b", "c", "d");