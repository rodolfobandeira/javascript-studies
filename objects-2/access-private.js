function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

var myBalance = john.getBalance();
console.log(myBalance);
