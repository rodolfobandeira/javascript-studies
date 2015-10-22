function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

var john = new Person('Rodolfo', 29);
console.log(john.bankBalance);

