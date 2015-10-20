var myArray = [];
var myObject = {};

myArray['foo'] = 'bar';
myObject['foo'] = 'bar';

if (myArray['foo'] === myObject['foo']) {
    console.log('yes, it is the same thing');
    console.log('Reading: ' + myObject['foo']);
} else {
    console.log('nop! different!')
}
