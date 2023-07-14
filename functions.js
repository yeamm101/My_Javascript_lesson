// Functions
// this is a function called "sayMyName"
// and it has 0 arguments
// it logs out your name in the console
function sayMyName() {
  console.log("Jonny");
}

sayMyName();

function sayMyName2() {
  console.log("Jake");
}

sayMyName2();

// this is a function called "greeting"
// and it has 1 argument
// it logs out your meeting on the console
// an argument is a kind of a variable that you can give value when you call out the function
function greeting(name) {
  // greet = 'hi ' + name + ', Nice to see you!'
  // the above is written in normal way but the one bellow is written in template and the  ${}  sign shows that the input between the brass is actually a variable not a string
  greet = `Hi ${name}, meet to see you!`;

  console.log(greet);
}

greeting("Jake");

function sum(a, b) {
  return a + b;
}
num1 = sum(3, 2);

console.log(num1);

function totalCost(food, tip) {
  tipPercentage = tip / 100;
  tipAmount = food * tipPercentage;
  total = sum(food, tipAmount);
  return total;
}

console.log(totalCost(100, 20));

// ES6
// arrow functions
// arrow function with explicit return
const productArrow = (a, b) => {
  return a * b;
};

console.log((productArrow(23, 2)));
// arrow function with implicit return
// no brass needed
const sumArrow = (a, b) => a + b;

console.log(sumArrow(10, 20));
