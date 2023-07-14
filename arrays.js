// arrays
const groceries = ["banana", "apple", "orange", "pean"];
console.log(groceries);
console.log(groceries[0]);
console.log(groceries[1]);
console.log(groceries[2]);
console.log(groceries[3]);

// [] is index
// it helps to grap()
// and starts with 0 ie banana is the index 0(the fist item)
console.log(groceries[2]);

// array methods
// push adds more elements to an end of array
groceries.push("cookie", "blueberry");
console.log(groceries);

// method slice
// call out index 0 inclusive upto 3( without including index 3)
console.log(groceries.slice(0, 3));
console.log(groceries.slice(3, 5));
console.log(groceries.slice(1, 4));
// array mthods (slice, push, indexOf, length)
console.log(groceries.indexOf("pean"));
console.log(groceries.length);
