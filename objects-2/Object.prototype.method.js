function Animal(name,age) {
    this.name = name;
    this.numLegs = age;
};

Animal.prototype.sayName = function (name) {
    console.log("Hi my name is " + this.name);
};

var penguin = new Animal("Captain Cook", 2);
penguin.sayName();

