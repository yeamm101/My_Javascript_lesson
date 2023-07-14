// objects {}
const person = { name: "Leonardo", shirt: "white" };
// the codes below it is represented using dot notation
console.log(person.name);
console.log(person.shirt);
// the codes below it is represented using bracket notation
console.log(person["name"]);
console.log(person["shirt"]);

// assign object
person.phone = "1-222-333-4444";
console.log(person.phone);
console.log(person);
person["cell"] = "2-333-333-4444";
console.log(person["cell"]);
console.log(person.cell);

// person2
const person2 = { name: "Qazi", shirt: "black" };
console.log(person2.name);
console.log(person2["shirt"]);
console.log(person2);

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
  };
  const intro = `Hi my name is ${person.name} and I am wearing a ${person.shirt} shirt.`;

  return intro;
};

console.log(introducer("Jake", "white"));

const order = (type, size) => {
  const food = {
    type: type,
    size: size,
  };
  const ord = `Hi, I would like to order ${food.type} in ${food.size} size.`;

  return ord;
};

console.log(order("chips", "large"));

const introducer2 = (name2, shirt2) => {
  person2 = {
    name2: name2,
    shirt2: shirt2,
    assets: 30000,
    dept: 20000,
    networth: function () {
      return this.assets - this.dept;
    },
  };
  const intro2 = `Hi I am ${person2.name2} and I am wearing a ${
    person2.shirt2
  } shirt. and my networth is ${person2.networth()} USD`;

  return intro2;
};

console.log(introducer2("Leonardo", "white"));
