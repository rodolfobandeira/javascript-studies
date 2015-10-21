var Circle = function (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };    
    
    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}

foo = new Circle(1);
console.log(foo);
console.log(new Circle(2));
console.log(new Circle(4));
