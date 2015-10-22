function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function() {
        console.log("Hello!");  
    };
}

var user = new Person("Codecademy Student",false);
user.speak();

