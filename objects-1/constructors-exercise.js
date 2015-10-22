// Our Person constructor
var Person = function (name, age){
    this.name = name;
    this.age = age;
};

// Now we can make an array of people
var family = [];
family[0] = new Person("alice",40);
family[1] = new Person("bob",42);
family[2] = new Person("michelle",8);
family[3] = new Person("timmy",6);

// loop through our new array

for (key in family) {
    console.log(family[key].name);
}

