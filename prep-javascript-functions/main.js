function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

//addTwoNumbers//

function add2Numbers(num1, num2) {
  return num1 + num2;
}

var sum = add2Numbers(333, 444);
console.log('sum =', sum);

//convertHoursToMinutes//

function convertHoursToMinutes(hours) {
return hours*60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes =', minutes);

//getGreeting//

function getGreeting(name) {
  return name
}

var greeting = getGreeting('World');
console.log('Hello', greeting + '!');

//addAndMultiplyBy5//

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2)*5;
}

var firstInput = addAndMultiplyBy5(24, 60);
console.log('Answer is', firstInput);

//multiplyAndDivideBy5//

function multiplyAndDivideBy5(num1, num2) {
  return (num1*num2)/5;
}

var secondInput = multiplyAndDivideBy5(674, 15);
console.log('Answer is', secondInput);

//subtractTwoNumbers//

function subtractTwoNumbers(num1, num2) {
  return num1-num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('Answer is', difference);

//getCircumference//

function getCircumference(radius) {
  return 2*3.14*radius;
}

var circumference = getCircumference(5);
console.log('Circumference is', circumference);

//getFullName//

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

var fullName = getFullName('Kevin', 'Liang');
console.log('My name is', fullName);

//cube//

function cube(number) {
  return number*number*number
}

var cubedNumber = cube(5);
console.log('Answer is', cubedNumber);
