var allPrez = [ "George Washington",
  "John Adams",
  "Thomas Jefferson",
  "James Madison",
  "James Monroe",
  "John Quincy Adams",
  "Andrew Jackson",
  "Martin Van Buren",
  "William Henry Harrison",
  "John Tyler",
  "James Knox Polk",
  "Zachary Taylor",
  "Millard Fillmore",
  "Franklin Pierce",
  "James Buchanan",
  "Abraham Lincoln",
  "Andrew Johnson",
  "Ulysses S Grant",
  "Rutherford Birchard Hayes",
  "James Abram Garfield",
  "Chester Alan Arthur",
  "Grover Cleveland",
  "Benjamin Harrison",
  "Grover Cleveland",
  "William McKinley",
  "Theodore Roosevelt",
  "William Howard Taft",
  "Woodrow Wilson",
  "Warren Gamaliel Harding",
  "Calvin Coolidge",
  "Herber Clark Hoover",
  "Franklin Delano Roosevelt",
  "Harry S. Truman",
  "Dwight David Eisenhower",
  "John Fitzgerald Kennedy",
  "Lyndon Baines Johnson",
  "Richard Nixon",
  "Gerald Ford",
  "Jimmy Carter",
  "Ronald Reagan",
  "George Herbert Walker Bush",
  "William Jefferson Clinton",
  "George Walker Bush",
  "Barack Obama"
];

console.log('Increment by 10');

// Write a `for` loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use `console.log()` to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.

for(let i = 5; i <= 120; i += 10) {
  console.log("Current value of counter i: ", i);
};

console.log('Decrement by Division');

// Write a `for` loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use `console.log()` to output its value every time. When the counter variable's value is 1, stop execution.

for(let i = 4096; i >= 1; i /= 2) {
  console.log('Current value of counter i: ', i);
};

console.log('Array Interation');

// Create an array that contains the names of American Presidents. Loop over that array with a `for` loop, and use string concatenation with `console.log()` to output the order and name of each President (see example below).

for(let i = 0; i < allPrez.length; i ++) {
  console.log('President #' + (i+1) + ' was ' + allPrez[i]);
};

console.log('Object Iteration')

// You can use another kind of `for` loop to [iterate over objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in). Iterate over the object below and use `console.log()` to output the names of the keys in the object.

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
};

for (var prop in antSpecies) {
  console.log("A species of ant is " + prop + " ant.");
}

