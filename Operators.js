// applying operators
// my fist javascript app
// Number () forces a string to be converted into a number
food = Number(prompt("How much did the food cost?"));
tipPercentage = prompt("How much would you want to tip (in percent)?") / 100;
VAT = food * 0.15;
tipAmount = food * tipPercentage;
foodWithVAT = food + VAT;
total = food + tipAmount + VAT;
console.log("The amount of money you tipped", tipAmount);
console.log("VAT", VAT);
console.log("Total", total);
