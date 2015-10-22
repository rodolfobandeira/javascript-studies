// this is a class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// this is another class
function Emperor(name) {
    this.name = name;
}

// Here we are using prototype property to inherit Penguin
// similar with class Emperor extends Penguin
Emperor.prototype = new Penguin();

// creating an object of Emperor
var emperor = new Emperor();
var pernas = emperor.numLegs;

// This prints 2, a property from Penguin but from Emperor Object
console.log(pernas);

