//user input
/* data types
number 22135654
strings 'hi' or "hi"
arrays[]
objects{}
booleans true/false
*/

/* math oprators
** exponents
% modulo(remainder)
*/

/*math methods
Floor = round down
ceil = round up
random = gives you a random number between 0 and 1 so to get a number between 0 and 6 we multiply Math.random() by 6
*/

// baby weather app
let weather = prompt("Is the weather sunny or rainy outside?");

if (weather == "rainy") {
  console.log("Don't forget to grab your umberella.");
} else {
  console.log("Wear simple cloth and don't forget your sunglasses.");
}
