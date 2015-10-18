var foo;

var setFoo = function (fooValue) {
    foo = fooValue; 
};

var getFoo = function() {
    return foo;
};

var auxVar = prompt('What value do you want to set?');

setFoo(auxVar);

for (var i = 0; i <= 10; i++) {
    if (i > 5) {
        console.log(i + ":: More than 5: " + getFoo());
    } else {
        console.log(i + ":: Less than 5: " + getFoo());   
    }
}

