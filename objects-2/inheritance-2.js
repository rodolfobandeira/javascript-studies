function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
};

Penguin.prototype = new Animal('Tux');

var penguin = new Penguin();
penguin.name = 'tux2';
penguin.sayName();
