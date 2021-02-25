"use strict";

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


///////////////////////////////////////
// Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}


///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}


///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}


///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

// let country = "Ethiopia";
// let continent = "Africa";
// let population = 100000000;

// console.log(`${country}, ${continent}, ${population}`);

// if (population > 33000000) {
//   console.log(`${country}'s population is ${population} hence above average`);
// } else {
//   console.log(`${country}'s population is ${population} hence below average`);
// }

// population = 13;
// population = 130;
// population = 100000000;

// let x = prompt("How many neighbouring countries do you have ? ");
// let x = "9";
// x = parseInt(x);
// if (x === 1) {
//   console.log("Only 1 border");
// } else if (x > 1) {
//   console.log("more than one border");
// } else if (x <= 0) {
//   console.log();
// }

// let language = prompt("Please enter get info about languange: ");
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   default:
//     console.log("Great language too :D'😊");
// }

// let pop = prompt("Enter population size: ");
// pop = parseInt(pop);

// pop > 33000000
//   ? console.log("Portugal's population is above average")
//   : console.log("Portugal's population is below average");

// const describeCountry = function (country, pop, cap) {
//   return `${country} has ${pop} people and its capital city is ${cap}`;
// };

// let x = describeCountry("Ethio", 3, "Addis");

// console.log(x);

// const percentageOfWorld1 = function (pop) {
//   // return percentage
//   return (pop * 100) / 7900;
// };

// let ethioPop = percentageOfWorld1(100);

// console.log(ethioPop);

// function percentageOfWorld2(pop) {
//   return (pop * 100) / 7900;
// }
// let ethioPop2 = percentageOfWorld2(100);

// console.log(ethioPop2);

// let percentageOfWorld3 = (pop) => (pop * 100) / 7900;

// let ethioPop3 = percentageOfWorld3(100);

// console.log(ethioPop3);

// const describePopulation = function (country, pop) {
//   let chiPop = percentageOfWorld3(pop);
//   chiPop = Math.round(chiPop * 100) / 100;
//   return `${country} has ${pop} mil people which is about ${chiPop} % of the world`;
// };

// let chidDemo = describePopulation("China", 300);
// console.log(chidDemo);

// const populations = [100, 200, 300, 400];
// const percentages = [];

// for (let i = 0; i < populations.length; i++) {
//   let percentage = percentageOfWorld3(populations[i]);
//   percentage = Math.round(percentage * 100) / 100;
//   percentages.push(percentage);
// }

// console.log(percentages);

// const neighbours = ["canada", "mexico"];

// neighbours.push("utopia");

// console.log(neighbours);

// let x = neighbours.pop();
// console.log(neighbours, x);

// neighbours.unshift("Promised land");

// console.log(neighbours);

// neighbours.shift();

// if (!neighbours.includes("germany")) {
//   console.log("Probably not in central Europe");
// }

// neighbours[0] = "kenya";

// console.log(neighbours);

// console.log(
//   `${myCountry.country} has ${myCountry.population}mil people and they speak ${myCountry["language"]} language. ${myCountry.country} has ${myCountry.neighbours} as neighbouring countries and a capital called ${myCountry["capital"]}.`
// );

// const myCountry = {
//   country: "Ethiopia",
//   capital: "Addis",
//   language: "Amharic",
//   population: 100,
//   neighbours: ["kenya", "sudan", "somalia"],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population}mil people and they speak ${this["language"]} language. ${this.country} has ${this.neighbours} as neighbouring countries and a capital called ${this["capital"]}.`
//     );
//   },

//   checkIsland: function () {
//     thisisIsland = this.neighbours.length === 0 ? "true" : "false";
//     console.log(thisisIsland);
//   },
// };

// myCountry.describe();

// myCountry.checkIsland();

// for (let i = 1; i <= 50; i++) {
//   console.log(`voter number ${i} is voting`);
// // }
// const populations = [100, 200, 300, 400];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   let per = (populations[i] * 100) / 7900;
//   per = Math.round(per * 100) / 100;
//   percentages2.push(per);
// }
// console.log(percentages2);

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// console.log(listOfNeighbours[0].length);

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; i++) {
//     console.log(`neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }
// const populations = [100, 200, 300, 400];
// const percentages2 = [];

// const percentageOfWorld = function (pop) {
//   let perc = (pop * 100) / 7900;
//   perc = Math.round(perc * 100) / 100;
//   return perc;
// };

// percentageOfWorld(100);

// let i = 0;
// while (i < populations.length) {
//   let percentage = percentageOfWorld(populations[i]);
//   percentages2.push(percentage);
//   i++;
// }
// console.log(percentages2);

// const oMark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / Math.pow(this.height, 2);
//     return this.bmi;
//   },
// };
// const oJohn = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / Math.pow(this.height, 2);
//     return this.bmi;
//   },
// };
// oMark.calcBMI();
// oJohn.calcBMI();

// console.log(oMark.bmi, oJohn.bmi);

// const calcBMI = function (mass, height) {
//   const BMI = mass / Math.pow(height, 2);
//   return BMI;
// };

// let markBMI = calcBMI(massMark, heightMark);
// let johnBMI = calcBMI(massJohn, heightJohn);

// console.log(markBMI, johnBMI);

// let markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// let dolphins1 = [96, 108, 89];
// let Koalas1 = [88, 91, 110];

// let average = function (arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let ave = sum / arr.length;
//   return ave;
// };

// average(dolphins1);
// console.log(average(dolphins1), average(Koalas1));

// const arrBill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const arrTip = [];
// const arrTotal = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < arrBill.length; i++) {
//   let tip = calcTip(arrBill[i]);
//   arrTip.push(tip);
//   let total = tip + arrBill[i];
//   arrTotal.push(total);
// }

// // console.log(calcTip(100));

// console.log(`Bills: ${arrBill}, \nTips: ${arrTip}, \nTotals: ${arrTotal}`);

// let calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let ave = sum / arr.length;
//   return ave;
// };
// console.log(calcAverage(arrBill));
// console.log(calcAverage(arrTotal));

// let dolphins1 = [44, 23, 71];
// let Koalas1 = [65, 54, 49];

// let dolphins2 = [85, 54, 41];
// let Koalas2 = [23, 34, 27];

// let calcAverage = function (arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   let ave = sum / arr.length;
//   return ave;
// };

// const aveDolphins1 = calcAverage(dolphins1);
// const aveKoalas1 = calcAverage(Koalas1);

// const aveDolphins2 = calcAverage(dolphins2);
// const aveKoalas2 = calcAverage(Koalas2);

// const checkWinner = function (ave1, ave2) {
//   return ave1 > 2 * ave2
//     ? `Team1 is the winner with ${ave1}`
//     : ave2 > 2 * ave1
//     ? `Team1 is the winner with${ave2}`
//     : `No team wins! `;
// };

// console.log(checkWinner(aveDolphins1, aveKoalas1));
// console.log(checkWinner(aveDolphins2, aveKoalas2));

// const arrFor = [17, 21, 23];
// // "...17ºC in 1days ... 21ºC in 2 days ... 23ºC in 3 days ...";

// const printForcast = function (arr) {
//   let row = "...";

//   for (let i = 0; i < arr.length; i++) {
//     row += `${arr[i]}ºC in ${i + 1} days ` + "...";
//   }
//   console.log(row);
// };
// console.log(printForcast(arrFor));

// --- Algo Practice ----

// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
// How many times do the elements in array2 appear in array1?

// 'abc' appears twice in the first array (2)
// 'cde' appears only once (1)
// 'uap' does not appear in the first array (0)
// Therefore, solve(array1, array2) = [2, 1, 0]

// Good luck!
//---soluton

// const c = [];
// function solve(a, b) {
//   for (let i = 0; i < b.length; i++) {
//     let count = 0;
//     for (let j = 0; j < a.length; j++) {
//       if (b[i] === a[j]) {
//         count++;
//       }
//     }
//     // console.log(`${b[i]} appears ${count} times in array1`);
//     c.push(count);
//   }
//   return c;
// }

// const array1 = ["abc", "abc", "xyz", "cde", "uvw"];
// const array2 = ["abc", "cde", "uap"];

// solve(array1, array2);

// console.log(c);

// 'abc' appears twice in the first array (2)
// 'cde' appears only once (1)
// 'uap' does not appear in the first array (0)

// let alphabet = ["a", "b", "c", "d", "e"];
// let arrValue = [];

// const switchNum = function (arr) {
//   for (let i = 0; i < arr.lenth; i++) {
//     let numValue = i + 1;
//     console.log(`Value of ${arr[i]} is ${numValue}`);
//     arrValue.push(numValue);
//   }
//   return arrValue;
// };

// switchNum(alphabet);

// console.log(arrValue);

//-------Algo

// let range = 232;
// let sNumber = range.toString();
// let y = "";

// for (let i = 0; i < sNumber.length; i++) {
//   let x = Math.pow(sNumber[i], 2);
//   x = x.toString();
//   y += x;
// }
// console.log(y);

// function squareDigits(num) {
//   let sNumber = num.toString();
//   let x = "";
//   for (let i = 0; i < sNumber.length; i++) {
//     let y = Math.pow(sNumber[i], 2);
//     y = y.toString();
//     x += y;
//   }
//   return parseInt(x);
// }
// console.log(squareDigits("9119"));

///----Algo questions-----
// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

// function iqTest(numbers) {
//   let countEven = 0;
//   let countOdd = 0;
//   let y;
//   let z;

//   for (let i = 0; i < numbers.length; i++) {
//     let x = numbers[i] % 2;

//     if (x === 0) {
//       countEven++;
//       y = numbers[i];
//     } else if (x === 1) {
//       countOdd++;
//       z = numbers.indexOf(numbers[i]) + 1;
//       break;
//     } else if (x === " ") {
//       continue;
//     }
//     // console.log(
//     //   countEven > countOdd ? "find the odd one!" : "find the even one!"
//     // );
//   }

//   if (countOdd === 1) {
//     return z;
//   } else {
//     return y;
//   }
// }

// console.log(iqTest("2 4 7 8 10"));
// //"1 2 2"

// let s = "2 4 7 8 10";

// let userInputPIN = prompt("Please enter your pin: ");

// function checkPIN(inputPIN) {
//   if (inputPIN.length !== 4 && inputPIN.length !== 6) {
//     return false;
//   } else {
//     true;
//   }
// }

// console.log(checkPIN(userInputPIN));

// let arr1 = [
//   [3, 0],
//   [9, 1],
//   [4, 10],
//   [12, 2],
//   [6, 1],
//   [7, 10],
// ];

// Test.assertEquals(number([[10,0],[3,5],[5,8]]),5);
// Test.assertEquals(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
// Test.assertEquals(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);

// const number = function (busStops) {
//   let difference;
//   let sumOn = 0;
//   let sumOff = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     sumOn = sumOn + busStops[i][0];
//     sumOff = sumOff + busStops[i][1];
//     difference = sumOn - sumOff;
//   }
//   return difference;
// };
// console.log(number(arr1));

// let fibonacci = [];
// let x = 0;
// fibonacci.push(x);
// let y = 1;
// fibonacci.push(y);

// for (let i = 0; i < 10; i++) {
//   let sum = x + y;
//   x = y;
//   y = sum;
//   fibonacci.push(y);
// }
// console.log(fibonacci);

// let arr1 = [3, 2, 1, 4, 3, 2, 1];

// function twoSidesSum(arr) {
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
//     console.log(sum1);
//     for (let j = arr.length - 1; j >= 0; j--) {
//       sum2 += arr[j];
//       if (sum2 === sum1) {
//         console.log(`${sum1}equal to ${sum2}`);
//         break;
//       }
//     }
//   }
// }

// function findEvenIndex(arr) {
//   let sumTotal = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumTotal += arr[i];
//   }
//   let sumRight = 0;
//   let sumLeft = 0;
//   for (let i = 1; i < arr.length - 1; i++) {
//     sumLeft += arr[i - 1];
//     sumRight = sumTotal - arr[i] - sumLeft;
//     if (sumRight === sumLeft) {
//       console.log(arr.indexOf(arr[i]));
//       break;
//     }
//   }
// }

// function findEvenIndex(arr) {
//   let sumTotal = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumTotal += arr[i];
//   }
//   let sumRight = 0;
//   let sumLeft = 0;
//   for (let j = 1; j < arr.length - 1; j++) {
//     sumLeft += arr[j - 1];
//     sumRight = sumTotal - arr[j] - sumLeft;
//     if (sumRight === sumLeft) {
//       return arr.indexOf(arr[j]);
//       break;
//     }
//   }
// }
// console.log(findEvenIndex(arr1));

// let arr1 = [1, 2, 3, 4, 5, 7, 8, 10, 13];
// let missing = [];

// function missingNum(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - arr[i - 1] !== 1) {
//       let x = arr[i] - arr[i - 1];
//       for (let j = 1; j < x; j++) {
//         missing.push(arr[i - 1] + j);
//       }
//     }
//   }
//   return missing;
// }
// console.log(`Original array: ${arr1} \n Missing Numbers: ${missingNum(arr1)}`);

// var alphabet = "abcdefgheijklmnopqrstuvwxyz";
// let odd = "";
// console.log(alphabet.charCodeAt(26));

// console.log(alphabet.toUpperCase());
// console.log(alphabet.length);

// for (let i = 1; i < alphabet.length; i++) {
//   let x = alphabet.charCodeAt(i) - alphabet.charCodeAt(i - 1);
//   // console.log(x);
//   if (x === 1) {
//     continue;
//   } else {
//     let y = String.fromCharCode(alphabet.charCodeAt(i));
//     console.log(`${y} is out of place`);
//     odd += y;
//     break;
//   }
// }
// console.log(odd);

// let str = "abcdf";

// function findMissingLetter(array) {
//   let y = 0;
//   for (let i = 1; i < array.length; i++) {
//     let x = array.charCodeAt(i) - array.charCodeAt(i - 1);
//     if (x !== 1) {
//       y = 1 + array.charCodeAt(i - 1);
//       y = String.fromCharCode(y);
//       break;
//     }
//   }
//   return y;
// }

// console.log(findMissingLetter(str));

// let arr1 = ["a", "b", "c", "d", "f"];

// function findMissingLetter(array) {
//   let y = 0;
//   for (let i = 1; i < array.length; i++) {
//     let x = array[i].charCodeAt() - array[i - 1].charCodeAt();
//     if (x !== 1) {
//       y = 1 + array[i - 1].charCodeAt();
//       y = String.fromCharCode(y);
//       break;
//     }
//   }
//   return y;
// }

// console.log(findMissingLetter(arr1));

// console.log("a".charCodeAt());

// let str = "abcdefghi";
// let numStr = "12343445";

// let arr1 = ["a", "b", "c", "d", "f"];

// let x = str[0].charCodeAt();
// let a = 98;
// str[0] = "b";

// console.log(srt);

// let y = numStr[0].charCodeAt();
// console.log(y);

// let z = arr1[0].charCodeAt();
// arr1[0] = "e";

// console.log(arr1);

// function maskify(stringArr) {
//   for (let i = 0; i < stringArr.length - 5; i++) {
//     // let x=stringArr[i].charCodeAt();
//     stringArr[i] = "#";
//   }
//   return stringArr;
// }

// console.log(maskify(str));

// let num1 = 2349;

// function addDigits(num) {
//   let x = num.toString();

//   let sum = 0;
//   let sumAgain = 0;

//   for (let i = 0; i < x.length; i++) {
//     sum += Number(x[i]);
//     // console.log(sum);
//   }
//   if (sum >= 10) {
//     sumAgain = addDigits(sum);
//     return sumAgain;
//   }

//   return sum;
// }

// console.log(addDigits(num1));

// let str1 = "WWUBEWUBLWUBOVE❤WUBYOUWUB";
// let outStr1 = "WUB";
// let inStr1 = "";

// ----sketch before writing the function
// let s = str1.replace(outStr1, inStr1);
// console.log(s);

// let z = s.includes(outStr1);
// console.log(z);

// if ((z = true)) {
//   s = s.replace(outStr1, inStr1);
//   console.log(s);
// } else {
//   console.log(z);
// }
// ------

// function findWUB(strFull, strOut, strIn) {
//   let newStr = strFull.replace(strOut, strIn);
//   // console.log(newStr);

//   let checkStr = newStr.includes(outStr1);
//   // console.log(checkStr);

//   if (checkStr === true) {
//     return findWUB(newStr, strOut, strIn);
//   }
//   return newStr;
// }
// console.log(findWUB(str1, outStr1, inStr1));

// let song1 = "WEWUBWUBAREWUBFINEWUB";
// // console.log(song1.charCodeAt(1));
// // console.log(song.charCodeAt(2) - song.charCodeAt(1));

// function songDecoder(song) {
//   let count = 0;
//   let original = "";
//   for (let i = 1; i < song.length; i++) {
//     let diff1 = song.charCodeAt(i) - song.charCodeAt(i - 1);
//     // console.log(diff1);
//     let diff2 = song.charCodeAt(i) - song.charCodeAt(i + 1);
//     // console.log(diff2);
//     if (song.charCodeAt(i) === 85 && diff1 === -2 && diff2 === 19) {
//       // console.log("Found one 'WUB'");
//       count++;
//     }
//   }

//   return count;
// }

// console.log(songDecoder(song1));

// let str1 = "xxosdkl3klnXXOOXo";

// let count_Xs = 0;
// let count_Os = 0;

// function XO(str) {
//   str = str.toLowerCase();
//   let b = str.includes("x");

//   if (b === true) {
//     count_Xs++;

//     str = str.replace("x", "");
//     XO(str);
//   } else if (b === false) {
//     let c = str.includes("o");
//     if (c === true) {
//       count_Os++;
//       str = str.replace("o", "");
//       XO(str);
//     }
//   }
//   return `Number of X's: ${count_Xs}, \n Number of O's: ${count_Os}`;
// }

// let primeNum = function (checkNum) {
//   let count = 0;
//   for (let i = 1; i < checkNum; i++) {
//     let x = checkNum % i;
//     if (x === 0) {
//       count++;
//       // return `${checkNum} is not prime`;
//     }
//     // return `${checkNum} is prime`;
//   }
//   if (count > 1) {
//     return `${count === 1}, ${checkNum} is not prime`;
//   }
//   return `${count === 1}, ${checkNum} is prime`;
// };

// console.log(primeNum(1));

// let liker = ["Peter", "John", "Sam"];
// let liker2 = ["Peter"];
// let liker3 = ["Mark", "Emman"];
// let liker4 = ["Peter", "John", "Sam", "Jay"];

// function likes(names) {
//   let row = "";
//   let lastPart = "";

//   for (let i = 0; i < names.length - 1; i++) {
//     if (names.length > 3) {
//       row += `${names[i]}, `;
//       lastPart = `and ${names.length - 3} others like this`;
//     } else if (names.length > 1 && names.length <= 3) {
//       row += `${names[i]},`;
//       lastPart = ` and ${names[names.length - 1]} like this`;
//     } else if ((names.length = 1)) {
//       row = `${names[i]} likes this`;
//     } else {
//       row = `noone likes this`;
//     }
//   }
//   return row + lastPart;
// }

// console.log(likes(liker4));

// let b = 0;
// let a = 1;
// let fib = [b, a];

// for (let i = 0; i <= 100; i++) {
//   let sum = b + a;
//   fib.push(sum);
//   b = a;
//   a = sum;
// }
// console.log(fib);

// let b = 0;
// let a = 1;
// let fib = [b, a];

// for (let i = 0; i <= 1000; i++) {
//   let sum = b + a;
//   fib.push(sum);
//   b = a;
//   a = sum;
// }
// // console.log(fib);

// let arr = [0, 1, 4, 2, 3, 12, 8, 6, 4, 24];

// function productFib(prod) {
//   let a;
//   let b;
//   let c;
//   let count = 0;

//   for (let i = 0; i < prod.length; i++) {
//     a = prod[i];
//     b = prod[i + 1];

//     let product = a * b;
//     for (let j = 0; j < prod.length; j++) {
//       if (product === prod[j]) {
//         count++;
//         c = prod[j];
//         console.log(`${c} = ${a}*${b}`);
//       }
//     }
//   }
//   return `we found ${count} instances.`;
// }

// console.log(productFib(fib));

// let x = "asadkasdk";
// let y = "";

// console.log(x.length);
// for (let i = x.length - 1; i >= 0; i--) {
//   y += x[i];
// }
// console.log([y]);

// function sum(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += i;
//     console.log(i, sum);
//   }
//   return sum;
// }

// console.log(sum(6));
// console.log(performance.now());

// let i = 0;

// console.log("going up");

// while (i <= 9) {
//   console.log(i);
//   i++;
// }
// console.log("at the top \n going down");
// i = 9;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// function logAtleast5(n) {
//   for (let i = 1; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }
// logAtleast5(6);

// let x = {
//   age: 3,
//   friends: 3,
//   parents: ["mom", "dad"],
// };

// console.log(Object.keys(x));
// console.log(Object.entries(x));

// let y = x.hasOwnProperty("friends");
// console.log(y);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 1, 9];

// for (let element of arr1) {
//   console.log(element);
// }

// for (let val of arr2) {
//   console.log(val);
// }
// function squareElement(arr1, arr2) {
//   let count = 0;
//   for (let i = 0; i <= arr1.length; i++) {
//     for (let j = 0; j <= arr2.length; j++) {
//       if (arr1.length === arr2.length) {
//         if (Math.pow(arr1[i], 2) === arr2[j]) {
//           count++;
//           if (count > 1) {
//             break;
//           }
//         }
//       } else {
//         console.log("the frequency just failed !");
//         break;
//       }
//     }
//   }
//   if (count === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(squareElement(arr1, arr2));

// let o = new Object(true);
// o = new Object(undefined);
// o = new Object(null);

// console.log(o);

// let x = "abba";
// // console.log(x.includes("b"));
// // console.log(x.replace("a", ""));

// let ana = ["aabb", "abcd", "bbaa", "dada"];

// function findAnagrams(x, arr) {
//   let anagrams = [];
//   for (let i = 0; i <= x.length; i++) {
//     for (let j = 0; j <= ana.length; j++) {
//       let y = ana[j].includes(x[i]);
//       console.log(y);
//       if (y === true) {
//         ana[j].replace(x[i], "");
//         console.log(ana[j]);
//         x.replace(x[i], "");
//       } else {
//         console.log(`${ana[j]} is not an anagram`);
//       }
//     }
//   }
//   if (ana.includes("")) {
//     anagrams.push(ana.indexOf(""));
//     return anagrams;
//   }
// }

// console.log(findAnagrams(x, ana));

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i <= arr1; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(correctIndex, arr2);

//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// let a1 = [1, 2, 3, 2];
// let a2 = [4, 1, 9, 4];
// console.log(same(a1, a2));

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let element of arr1) {
//     frequencyCounter1[element] = frequencyCounter1[element] || 0 + 1;
//   }
//   for (let element of arr2) {
//     frequencyCounter2[element] = frequencyCounter2[element] || 0 + 1;
//   }
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);
//   return true;
// }

// function anagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }
//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }
//   console.log(lookup);
//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// // }

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// function anagrams(word, words) {
//   let ana = []; // create empty arry

//   for (let j = 0; j < words.length; j++) {
//     //loop through the firs word of the array
//     if (word.length === words[j].length) {
//       // only continue if the length of the word and the first word of the array are equal
//       let lookup = {}; //create the first object

//       for (let i = 0; i < word.length; i++) {
//         //loop throught the word
//         let letter = word[i];
//         lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//       }
//       console.log(lookup);

//       for (let i = 0; i < words[j].length; i++) {
//         //loop throught the word from the array

//         let letter = words[j][i];
//         if (lookup[letter]) {
//           lookup[letter] -= 1;
//         }
//       }
//       ana.push(word[j]);
//     }
//   }
//   return ana;
// }
// console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));

// let anagram = function (first, second) {
//   if (first.length !== second.length) return false;

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }
//   console.log(lookup);

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// };

// // console.log(anagram("anca", "naac"));

// let arr1 = [-3, -2, -1, 0, 1, 2, 3];

// let sumZero = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; i++) {
//       console.log(arr[i], arr[j]);
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// };

// let sumZero1 = function (arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// };
// console.log(sumZero1(arr1));

// let x = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6, 7];

// function findUnique(arr) {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//     console.log(i, j);
//   }
//   return i + 1;
// }
// console.log(findUnique(x));

// arr1 = [1, 2, 5, 3, 6, 7, 9, 2, 8, 4, 5, 6]; //26(7 to 8)

// function sumMax(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//       if (temp > max) max = temp;
//     }
//     console.log(temp, max);
//   }
//   return max;
// }
// console.log(sumMax(arr1, 4));

// arr1 = [1, 2, 3, 4, 3, 2, 6, 3]; //15

// function sumMax(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }

//   let max = -Infinity;

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//       if (temp > max) {
//         max = temp;
//       }
//     }
//     console.log(temp, max);
//   }
//   return max;
// }

// function sumMax(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;

//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   console.log(tempSum);
//   for (let i = num; i < arr.length; i++) {
//     maxSum = tempSum - arr[i - num] + arr[i];
//     console.log(tempSum, maxSum);
//     maxSum = Math.max(tempSum, maxSum);
//   }
//   return maxSum;
// }

// console.log(sumMax(arr1, 4));

// let arr1 = [1, 2, 3, 5, 7, 8, 10, 12, 13, 14, 15];

//----DIVIDE AND CONQUER ---

// function search(arr, val) {
//   let min = 0;
//   let max = arr.length - 1;

//   while (min < max) {
//     let middle = Math.floor((min + max) / 2);
//     // let currentElement = array[middle];

//     if (arr[middle] < val) {
//       min = middle + 1;
//     } else if (arr[middle] > val) {
//       max = middle - 1;
//     } else {
//       return middle;
//     }
//   }
//   return -1;
// }
// console.log(search(arr1, 13));
// let x = 454;
// console.log(x.toString());

// function sameFrequency(int1, int2) {
//   int1 = int1.toString();
//   int2 = int2.toString();

//   if (int1.length !== int2.length) {
//     return false;
//   }
//   let lookup = {};

//   for (let i = 0; i < int1.length; i++) {
//     let number = int1[i];
//     lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
//   }

//   for (let i = 0; i < int2.length; i++) {
//     let number = int2[i];
//     if (!lookup[number]) {
//       return false;
//     } else {
//       lookup[number] -= 1;
//     }
//   }
//   return true;
// }

// console.log(sameFrequency(324, 243));

// let arg = [2, 3, 5, 6];

// function areThereDuplicates(arr) {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       return true;
//       i++;
//     }
//     console.log(arr[i], arr[j]);
//   }
//   return false;
// }
// console.log(areThereDuplicates(arg));

// let arr2 = [1, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9];

// function checkUnique(arr) {
//   if (arr.length < 0) return 0;
//   let i = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }

// console.log(checkUnique(arr2));

// function areThereDuplicates(...args) {
//   args.sort((a, b) => a > b);
//   console.log(args);
//   let start = 0;

//   for (let next = 1; next < args.length; next++) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//   }
//   return false;
// }

// function areThereDuplicates(...args) {
//   args.sort((a, b) => a > b);
//   console.log(args);
//   let start = 0;
//   let next = 1;
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// console.log(areThereDuplicates(2, 4, 6, 8, 2, 3, 5));

// function averagePair(arr, tarAve) {
//   let i = 0;
//   let count = 0;
//   let arrPair1 = [];
//   let arrPair2 = [];
//   for (let j = 1; j < arr.length; j++) {
//     let x = arr[i] + arr[j];
//     if (x / 2 === tarAve) {
//       count++;
//       arrPair1.push(arr[i]);
//       arrPair2.push(arr[j]);
//       i++;
//     }
//   }
//   console.log(count, arrPair1, arrPair2);
//   if (count >= 1) return true;
//   else return false;
// }

// console.log(averagePair([1, 2, 3, 4, 5, 6], 3.5));

// function averagePair(arr, ave) {
//   let i = 0;
//   let j = 1;

//   while (j < arr.length) {
//     let sum = arr[i] + arr[j];
//     if (sum / 2 === ave) {
//       return true;
//     }
//     i++;
//     j++;
//   }
//   return false;
// }

// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;
//   let max = 0;
//   for (let i = 0; i < num; i++) {
//     max += arr[i];
//   }
//   let tempSum = max;
//   for (let i = num; i < arr.length; i++) {
//     tempSum += arr[i] - arr[i - num];
//     max = Math.max(max, tempSum);
//   }
//   return max;
// }

// console.log(maxSubarraySum([1, 3, 3, 5, 6, 7, 10, 12, 5, 2, 19], 3));

// let arr4 = [2, 3, 1, 2, 4, 3];

// function minSubArrayLen(arr, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < arr.length) {
//     if (total < sum && end < arr.length) {
//       total += arr[end];
//       end++;
//     } else if (total >= sum) {
//       minLen = Math.min(minLen, end - start);
//       total -= arr[start];
//       start++;
//     } else break;
//   }
//   return minLen === Infinity ? 0 : minLen;
// }

// console.log(minSubArrayLen(arr4, 9));

// let str1 = "rithmschool"; //7

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     longest = Math.max(longest, i - start + 1);
//     seen[char] = i + 1;
//   }
//   return longest;
// }

// console.log(findLongestSubstring(str1));

// function countDown(num) {
//   if (num <= 0) {
//     console.log("all done!");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }

// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// console.log(sumRange(3));

// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }
//   return total;
// }
// console.log(factorial(3));

// function factorial(num) {
//   if (num === 1) return 1;
//   let prod = num * factorial(num - 1);
//   return prod;
// }
// console.log(factorial(4));

// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }

// let a = [1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9];

// function collectOddValues(arr) {
//   let arrOdd = [];
//   function helper(helperInput) {
//     if (helperInput.length === 0) return;
//     if (helperInput[0] % 2 !== 0) {
//       arrOdd.push(helperInput[0]);
//     }
//     helper(helperInput.slice(1));
//   }
//   helper(arr);

//   return arrOdd;
// }
// console.log(collectOddValues(a));

// function collectOddValues(arr) {
//   let newArr = [];

//   if (arr.length === 0) return newArr;
//   if (arr[0] % 2 !== 0) {
//     newArr.push(arr[0]);
//   }
//   newArr = newArr.concat(collectOddValues(arr.slice(1)));
//   return newArr;
// }

// let str1 = "sdldkjk";
// console.log(str1.slice(0, -1));

// let x = str1[0].toUpperCase();

// str1 = x.concat(str1.slice(1));
// console.log(x, str1);

// let arr1 = ["cat", "rat", "dog"];
// let arr2 = ["cat"];

// function changeCase(arr) {
//   let update = [];
//   for (let i = 0; i < arr.length; i++) {
//     update.push(arr[i][0].toUpperCase().concat(arr[i].slice(1)));
//   }
//   return update;
// }

// function changeCase(arr) {
//   let newArray = [];
//   if (arr.length === 1) {
//     newArray.push(arr[0][0].toUpperCase().concat(arr[0].slice(1)));
//     return newArray;
//   } else {
//     let first = [];
//     console.log(arr[0]);
//     first.push(arr[0]);
//     console.log(first[0]);
//     changeCase(first);
//     return newArray;
//   }
//   // return (newArray = newArray.concat(changeCase(arr.slice(1))));
// }
// console.log(changeCase(arr1));

// function nestedEvenSum(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       sum += nestedEvenSum(obj[key]);
//     } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
//       sum += obj[key];
//     }
//   }
//   return sum;
// }

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" },
// };

// let x = nestedEvenSum(obj1); // 6
// let y = nestedEvenSum(obj2); // 10

// console.log(x, y);

// function capitalizeWords(arr) {
//   if (arr.length === 1) {
//     return arr[0].toUpperCase();
//   }
//   let res = capitalizeWords(arr.slice(0, -1));
//   res.push(arr.slice(arr.length - 1)[0].toUpperCase());
//   return res;
// }

// let words = ["i", "am", "learning", "recursion"];
// // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
// let word = ["mom"];
// console.log(capitalizeWords(words));

// let f = "mother";
// console.log(f.slice(5));

// let words = ["i", "am", "learning", "recursion"];
// // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// function capitalizeWords(array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length - 1)[0].toUpperCase());
//   return res;
// }

// console.log(capitalizeWords(words));

// function capitalizeFirst(arr) {
//   if (arr.length === 1) {
//     return arr[0][0].toUpperCase() + arr[0].slice(1);
//   }
//   const res = capitalizeFirst(arr.slice(0, -1));
//   const string =
//     arr.slice(arr.length - 1)[0][0].toUppercase() +
//     arr.slice(arr.length - 1)[0].slice(1);
//   res.push(string);
//   return res;
// }
// let x = capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
// let y = capitalizeFirst(["mom"]);
// console.log(y);

// let x = ["mother", "father", "brother"];

// let d = x.slice(0, -1);
// console.log(typeof d, d);
// console.log(d[0]);

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// function stringifyNumbers(obj) {
//   let newObj = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }
// console.log(stringifyNumbers(obj));

// let f = [];

// console.log(typeof f);

// function collectStrings(obj) {
//   let newArr = [];

//   function gatherStrings(o) {
//     for (let key in o) {
//       if (typeof o[key] === "string") {
//         newArr.push(o[key]);
//       } else if (typeof o[key] === "object") {
//         return gatherStrings(o[key]);
//       }
//     }
//   }
//   gatherStrings(obj);

//   return newArr;
// }

// const obj1 = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz",
//           },
//         },
//       },
//     },
//   },
// };

// console.log(collectStrings(obj1)); // ["foo", "bar", "baz"])

// function pseudoCode(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(pseudoCode([1, 2, 57, 8, 8, 6, 3, 3, 5, 7, 8, 8, 65, 5], 5));
// // let x = [1, 2, 3];
// // console.log(x.indexOf(1));

// let x = "Aamintes";
// console.log(x.charCodeAt(0));

let b = [1, 2, 3, 5, 7, 8, 10, 23, 45, 78, 90];

// function lookForNum(arr, num) {
//   let left = 0;
//   let right = arr.length - 1;

//   let middle = Math.floor((left + right) / 2); //5
//   while (arr[middle] !== num) {
//     if (arr[middle] > num) {
//       //if num is 7 and lower
//       right = middle - 1;
//       // middle = Math.floor((left + right) / 2);//middle is 2 and arr[middle] is 3
//       return lookForNum(arr.slice(left, right), num);
//     } else if (arr[middle] < num) {
//       left = middle + 1;
//       // middle = Math.floor((left + right) / 2);
//       return lookForNum(arr.slice(left, right), num);
//     }
//   }
//   return middle;
// }
// function binarySearch(arr, num) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== num && start < end) {
//     if (num < arr[middle]) end = middle - 1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === num ? middle : -1;
// }

// console.log(binarySearch(b, 140));

// console.log(x.charCodeAt(3));

// let x = "omgdfomdmofomgdf";
// let u = "omg";

// function lookForString(long, short) {
//   let count = 0;
//   for (let i = 0; i < long.length; i++) {
//     for (let j = 0; j < short.length; j++) {
//       if (short[j] !== long[i + j]) break;
//       if (j === short.length - 1) count++;
//     }
//   }
//   return count;
// }

// console.log(lookForString(x, u));

// function bubbleSort(arr) {
//   let noSwaps;
//   let swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//     console.log("round 1");
//   }
//   return arr;
// }

// function bubbleSort(arr) {
//   let noSwaps;
//   let swap = function (arr, idx1, idx2) {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (let i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i - 1; j++) {
//       // console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         noSwaps = false;
//       }
//     }
//     // console.log("round");
//     if (noSwaps) break;
//   }

//   return arr;
// }

// console.log(bubbleSort([34, 54, 75, 13, 5, -1]));
// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     if (i != min) {
//       let temp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = temp;
//     }
//   }
//   return arr;
// }

// function selectionSort(arr) {
//   let swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     if (i !== min) {
//       swap(arr, min, i);
//     }
//   }
//   return arr;
// }
// console.log(selectionSort([0, 2, 34, 54, 75, 13, 5]));

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let curentVal = arr[i];
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] < arr[i]) {
//         //swap
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//     console.log(arr);
//   }

//   return arr;
// }
// console.log(insertionSort([34, 24, 54, 75, 13, 5]));

// let n = prompt("how many windows do you want: ");
// let windWidth = [];
// let windHeight = [];
// // let widthSum=0;

// for (let i = 0; i <= n; i++) {
//   let x = prompt("Please give me the width: ");
//   let y = prompt("Please give me the height: ");
//   x = parseInt(x);
//   y = parseInt(y);

//   windWidth.push(x);
//   windHeight.push(y);
// }
// function addElements(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(windHeight, windWidth);
// console.log(addElements(windHeight));
// console.log(addElements(windHeight));

//input
//-take area input  - 10cent/sqft -once a week for 15 weeks

//process
//- cal charge per area -calculate charge perweek -calculate per 15 weeks

//output
//$charge for mowing lawn for entire season

// let areaInput = prompt("area: ");
// areaInput = parseFloat(areaInput);
// let chargePerArea = 10;
// let chargePerMow = areaInput * chargePerArea;
// let chargePerWeek = chargePerMow * 1;
// let chargePerSeason = chargePerWeek * 15;

// console.log(chargePerSeason);

// let x = 5;
// let y = "7";
// let test = false;
// let z;

// let result = x + y;
// console.log(result);
// console.log(typeof result);
// result = x + test;
// console.log(result);
// console.log(typeof result);
// result = test + y;
// console.log(result);
// console.log(typeof result);
// result = y * 2;
// console.log(result);
// console.log(typeof result);
// console.log(test - y);
// let count1 = 1;
// let count2 = 2;
// console.log(count1);
// console.log(++count1);
// console.log(count2);
// console.log(count2++);

// let result = count1-- * 2 + 5;
// console.log(result);
// console.log(count1);

// console.log(Math.floor(Math.random() * 6 + 1));
// let y;
// let x = y || 5;
// console.log(x);
// let z = x || 10;
// console.log(z);
// x = 0 && z;
// console.log(x);
// x = 1 && 9;
// console.log(x);

// let tempInCels = prompt("please enter temp in cels: ");
// let c = parseFloat(tempInCels);
// let tempInFahr = (9 / 5) * c + 32;

// console.log(tempInFahr);

// let totalInput = prompt("please enter total number of boxes: ");
// let eachStackHas = prompt("how many boxes do each stack have? ");
// totalInput = parseFloat(totalInput);
// eachStackHas = parseFloat(eachStackHas);

// let numOfStack = Math.floor(totalInput / eachStackHas);
// let remainder = totalInput % eachStackHas;

// if (remainder >= 1) {
//   console.log(`${numOfStack} stacks with ${eachStackHas} boxes and one  `);
// } else {
//   console.log("love you");
// }

// console.log(
//   `${
//     eachStackHas - remainder
//   } stacks have ${numOfStack} boxes, but ${remainder} stacks will have ${
//     numOfStack + 1
//   }`
// );

// let totalNum = prompt("total number of students : ");
// let teams = prompt("no of teams: ");

// totalNum = parseInt(totalNum);
// teams = parseInt(teams);

// let numOfMem = Math.floor(totalNum / teams);
// let remainder = totalNum % teams;

// console.log(
//   `${remainder} teams of ${numOfMem + 1} and ${
//     teams - remainder
//   } teams of  ${numOfMem} `
// );

// let x = prompt("odo reading 1: ");

// let y = prompt("odo reading 2: ");
// let z = prompt("number of gallons of gasoline: ");

// x = parseFloat(x);
// y = parseFloat(y);

// let milage = (y - x) / z;
// console.log("milage is " + milage);

// let grade = prompt("please enter your grade: ");
// let gpa;

// if (grade === "A") {
//   gpa = 4.0;
// } else if (grade === "B") {
//   gpa = 3.6;
// } else if (grade === "C") {
//   gpa = 3.2;
// } else {
//   gpa = 0.0;
// }

// console.log(gpa);

// switch (grade) {
//   case "A":
//     gpa: 4.0;
//     break;
//   case "B":
//     gpa = 3.8;
//     break;
//   case "C":
//     gpa = 3.2;
//     break;
//   default:
//     gpa = 0;
// }
// console.log(gpa);

// let age = prompt("age: ");
// let gamesAtended = prompt("games attended: ");
// let charge;

// if (age <= 17 && age < 0) {
//   if (gamesAtended > 0 && gamesAtended <= 5) {
//     charge = 8;
//   } else if (gamesAtended <= 10) {
//     charge = 6;
//   } else if (gamesAtended > 10) {
//     charge = 5;
//   } else {
//     console.log("Please enter again!");
//   }
// } else if (age <= 54) {
//   if (gamesAtended > 0 && gamesAtended <= 10) {
//     charge = 10;
//   } else if (gamesAtended > 10) {
//     charge = 8;
//   } else {
//     console.log("Please enter again!");
//   }
// } else if (age > 55) {
//   if (gamesAtended > 0 && gamesAtended <= 10) {
//     charge = 8;
//   } else if (gamesAtended > 10) {
//     charge = 6;
//   } else {
//     console.log("Please enter again!");
//   }
// } else {
//   console.log("please enter age correctly");
// }
// console.log(charge);

// let x = prompt("first number: ");
// let y = prompt("second number: ");
// x = parseInt(x);
// y = parseInt(y);

// let z = x - y;
// console.log(Math.abs(z));

// let cost = prompt("cost please : ");
// let downPayment;

// if (cost > 0 && cost < 50000) {
//   downPayment = 0.05 * cost;
// } else if (cost < 100000) {
//   downPayment = 2000 + 0.1 * (cost - 50000);
// } else {
//   downPayment = 7500 + 0.2 * (cost - 100000);
// }

// console.log(downPayment);
// function romanize(num) {
//   let roman = "";
// let obj = {
//   M: 1000,
//   MC: 900,
//   D: 500,
//   DC: 400,
//   C: 100,
//   CX: 90,
//   L: 50,
//   X: 10,
//   V: 5,
//   I: 1,
// };
//   for (let i in obj) {
//     while (num >= obj[i]) {
//       roman += i;
//       num -= obj[i];
//     }
//   }
//   return roman;
// }
// console.log(romanize(1987));

// let x = 1987;
// let roman = "";

// let obj = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   CX: 90,
//   L: 50,
//   XL:40,
//   X: 10,
//   V: 5,
//   IV:4,
//   I: 1,
// };

// let thou = Math.floor(x / 1000) * 1000;
// x -= thou;

// if (x=1000){
//   roman+="M";
// } else if (x=2000) {
//   roman+="MM"
// } else if (x=3000) {
//   roman+="MMM"
// }

// let hun = Math.floor(x / 100) * 100;
// x -= hun;
// let ten = Math.floor(x / 10) * 10;
// x -= ten;

// if (x>=5)
// let i = 0;
// while (i <= 3) {
//   console.log("Hello" + i);
//   i++;
// }

// let userInput;
// do {
//   userInput = prompt("please enter command: ");
//   console.log("excuse me? ");
// } while (userInput !== "stop");
// console.log("exiting...");

// let even = [];
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     even.push(i);
//   }
// }
// console.log(even);

// let userAge;
// do {
//   userAge = prompt("Age please: ");
// } while (parseInt(userAge) < 18);

// let num = prompt("enter number to test: ");
// num = parseInt(num);
// let isPrime = true;

// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// console.log(isPrime);

// for (let i = 5; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += i;
//   }
//   console.log(row);
// }
// let output = "0";
// let i = 2;
// while (i < 10) {
//   output += ", " + i;
//   i += 2;
// }
// console.log(output);

// let skip = 3;
// for (let i = 0; i <= 9; i += skip) {
//   console.log(i);
//   if (i === 9) break;
// }

// let i = 90;
// while (i >= 81) {
//   console.log(i);

//   if (i === 81) break;
//   i--;
// }

// input - intrger n -
// output - sum of all odd integers b/n 1 and n, inclusive

// let inputNum = prompt("Please enter the number : ");
// let n = parseInt(inputNum);
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// for (let i = 1; i <= 12; i++) {
//   console.log("5 x " + i + " = " + 5 * i);
// }
// let y = "";
// for (let i = 0; i <= 31; i++) {
//   let x = Math.pow(2, i);

//   y += x + ", ";
// }
// console.log(y);

// let x = 1;
// let y = 0;
// let fib = " ";
// for (let i = 0; i < 25; i++) {
//   let sum = x + y;
//   let temp = x;
//   x = sum;
//   fib += y + ", ";

//   y = temp;
// }
// console.log(fib);

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= 3; j++) {
//     row += i * j + "\t";

//     if (j === 3) {
//       let x = 2;
//       do {
//         row += Math.pow(i, x) + "\t";
//         x++;
//       } while (x <= 3);
//     }
//   }
//   console.log(row);
// }

// let arr1 = [2, 3, 5, 3, 6, 3, 6, 3, 6, -8];
// let sum = 0;
// let ave;

// for (let i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
//   ave = sum / arr1.length;
// }
// console.log(sum, ave);

// function isOdd(n) {
//   return n % 2 !== 0;
// }
// console.log(isOdd(3));

// function determineMonths(principal, annualRate, target) {
//   let monthlyRate = annualRate / 12;
//   let balance = principal;
//   let month = 0;
//   while (balance < target) {
//     let interest = Math.round(balance * monthlyRate);
//     balance += interest;
//     month++;
//   }
//   return month;
// }
// console.log(determineMonths(300, 0.06, 103));

// function gcd(num1, num2) {
//   if (num2 > num1) {
//     let swap = num1;
//     num1 = num2;
//     num2 = swap;
//   }
//   do {
//     let r = num1 % num2;
//     num1 = num2;
//     num2 = r;
//   } while (num2 !== 0);
//   return num1;
// }

// console.log(gcd(18, 102));

// let numInput = prompt("Please enter a number to check if its prime: ");
// numInput = parseInt(numInput);

// function checkPrime(num) {
//   let isPrime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//     }
//   }
//   return isPrime;
// }
// console.log(checkPrime(numInput));

// let userInput = prompt("enter temp in f: ");
// userInput = parseFloat(userInput);

// function fahrToCels(tempinF) {
//   let tempinC = (5 / 9) * 32 * (tempinF - 1);
//   return `${tempinC} deg Celcius`;
// }

// console.log(fahrToCels(userInput));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 1, 9];
// let arr3 = [4, 1, 9];

// function freqPat(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }
// console.log(freqPat(arr1, arr2));

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(same(arr1, arr2));

// function anagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }
//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }
//   console.log(lookup);
//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// // }

// let x = "pasta";
// let y = "taspa";

// function anagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let lookup = {};
//   for (let i = 0; i < str1.length; i++) {
//     let letter = str1[i];
//     lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
//   }
//   console.log(lookup);
//   for (let i = 0; i < str2.length; i++) {
//     let letter = str2[i];
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter]--;
//     }
//   }
//   return true;
// }
// console.log(anagram(x, y));

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// function countUnique(arr) {
//   if (arr.length === 0) return 0;
//   let i = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }
// console.log(countUnique([1, 1, 2, 3, 4, 4, 5]));

// function countUniqueValues(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }
// console.log(countUniqueValues([1, 1, 2, 3, 4, 4, 5]));

// let arr1 = [1, 3, 4, 5, 8, 2, 5, 6, 7, 1, 8];

// function subArraySum(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   let max = -Infinity;

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//     console.log(temp, max);
//   }
//   return max;
// }

// function subArraySum(arr, num) {
//   if (arr.length < num) return null;
//   let maxSum = 0;
//   let tempSum = 0;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

// console.log(subArraySum(arr1, 2));

// function search(arr, val) {
//   let min = 0;
//   let max = arr.length - 1;

//   while (min <= max) {
//     let middle = Math.floor((min + max) / 2);
//     let currentElement = arr[middle];

//     if (arr[middle] < val) {
//       min = middle + 1;
//     } else if (arr[middle > val]) {
//       max = middle - 1;
//     } else {
//       return middle;
//     }
//   }
//   return -1;
// }
// console.log(search([1, 1, 2, 3, 4, 4, 5], 5));

// function sameFrequency(int1, int2) {
//   let str1 = int1.toString();
//   let str2 = int2.toString();
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let lookup = {};
//   for (let i = 0; i < str1.length; i++) {
//     let letter = str1[i];

//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }
//   for (let i = 0; i < str2.length; i++) {
//     let letter = str2[i];

//     if (!lookup[letter]) return false;
//     else lookup[letter] -= 1;
//   }
//   return true;
// }

// console.log(sameFrequency(345, 4345));

// function areThereDuplicates() {
//   let collection = {};
//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//   }
//   console.log(collection);
//   for (let key in collection) {
//     if (collection[key] > 1) return true;
//   }

//   return false;
// }

// console.log(areThereDuplicates(1, 2, 2, 3, 4, 3, 4, 5, 6));

// function averagePair(arr, targetAve) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum / 2 === targetAve) {
//       console.log(arr[left], arr[right]);
//       return true;
//     } else if (sum / 2 < targetAve) {
//       left++;
//     } else right--;
//   }
//   return false;
// }

// console.log(averagePair([1, 2, 4, 5, 8, 9], 8));

// function isSubsequence(str1, str2) {
//   if (str1.length > str2.length) {
//     return false;
//   }
//   let collection = {};
//   for (let val in str2) {
//     collection[str2[val]] = (collection[str2[val]] || 0) + 1;
//   }
//   console.log(collection);
//   for (let val in str1) {
//     if (!collection[str1[val]]) return false;
//   }
//   return true;
// }

// console.log(isSubsequence("apk", "pasta"));

// function isSubsequence(str1, str2) {
//   //   let i = 0;
//   //   let j = 0;
//   //   if (!str1) return true;
//   //   while (j < str2.length) {
//   //     if (str2[j] === str1[i]) i++;
//   //     if (i === str1.length) return true;
//   //     j++;
//   //   }
//   //   return false;
//   // }

//   if (str1.length === 0) return true;
//   if (str2.length === 0) return false;
//   if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
//   return isSubsequence(str1, str2.slice(1));
// }

// console.log(isSubsequence("pstaa", "pasta"));

// let prompt = require("prompt-sync")();
// let userInput = prompt("Please enter a number you like:  ");
// let x = parseInt(userInput);

// if (x % 2 === 0) {
//   console.log("You Get along with people easily");
// } else console.log("getting along with people is not easy");

// for (let i = 100; i >= 0; i -= 4) {
//   console.log(i);
// }

// let userInput = prompt("Please enter an integer: ");
// let reversed = "";

// for (let i = userInput.length - 1; i >= 0; i--) {
//   reversed += userInput[i];
// }
// console.log(reversed, Number(reversed));
//

// -----Guessing Game-----

// let num = Math.floor(Math.random() * 100);

// let userInput = prompt("ከ1 እስከ 100 ቁጥር ይዣለሁ፤ እስቲ ገምት: ");
// userInput = parseInt(userInput);

// let count = 0;

// while (userInput !== num) {
//   count++;
//   if (count < 5) {
//     console.log(
//       "your guess is :" + userInput + "\n" + "attempt number: " + count
//     );
//   } else {
//     console.log(
//       "your guess is :" +
//         userInput +
//         "\n" +
//         "attempt number: " +
//         count +
//         "\n" +
//         "try: " +
//         num
//     );
//   }

//   userInput = prompt("Guess the number: ");
//   userInput = parseInt(userInput);
// }

// if (count === 0) {
//   console.log(
//     "Awesome! you got it correct on the first attempt. \n The number is " + num
//   );
// } else if (count === 1) {
//   console.log(
//     "Not bad! you got it correct on the second attempt.  \n The number is " +
//       num
//   );
// } else
//   console.log(
//     "you got it correct in " +
//       (count + 1) +
//       " attempts.  \n The number is " +
//       num
//   );

// ----Guessing game----
//

// let midterm = prompt("Please enter your midterm result (out of 30): ");
// let final = prompt("Please enter your final result (out of 50): ");

// midterm = parseInt(midterm);
// final = parseInt(final);

// let final_100 = ((midterm + final) * 5) / 4;
// let grade;

// if (final_100 > 92) {
//   grade = "A";
// } else if (final_100 > 85) {
//   grade = "B";
// } else if (final_100 > 75) {
//   grade = "C";
// } else {
//   grade = "NC";
// }

// console.log(final_100, grade);

// function mySubArraySum(arr, num) {
//   if (arr.length < num) return null;
//   let maxSum = 0;

//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   let tempSum = maxSum;
//   for (let j = num; j < arr.length; j++) {
//     tempSum = tempSum - arr[j - num] + arr[j];
//     maxSum = Math.max(tempSum, maxSum);
//   }
//   return maxSum;
// }

// console.log(mySubArraySum([1, 2, 3, 4, 5], 2));

// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;
//   let max = 0;
//   for (let i = 0; i < num; i++) {
//     max += arr[i];
//   }
//   let tempSum = max;
//   for (let i = num; i < arr.length; i++) {
//     tempSum += arr[i] - arr[i - num];
//     max = Math.max(max, tempSum);
//   }
//   return max;
// }

// function minSubArrayLen(arr, num) {
//   let start = 0;
//   let end = 0;
//   let total = 0;
//   let minLength = Infinity;

//   while (start < arr.length) {
//     if (total < num && end < arr.length) {
//       total += arr[end];
//       end++;
//     } else if (total >= num) {
//       minLength = Math.min(minLength, end - start);
//       total -= arr[start];
//       start++;
//     } else break;
//   }
//   return minLength === Infinity ? 0 : minLength;
// }

// console.log(minSubArrayLen([1, 2, 3, 1, 3, 5], 8));

// function findLongestSubstring(str) {
//   let seen = {};
//   let longest = 0;
//   let start = 0;
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     longest = Math.max(longest, i - start + 1);
//     seen[char] = i + 1;
//   }
//   return longest;
// }

// console.log(findLongestSubstring("mintesinot"));

// function countdown(num) {
//   if (num <= 0) {
//     console.log("All done");
//     return;
//   }
//   console.log(num);
//   num -= 1;
//   countdown(num);
// }
// console.log(countdown(6));

// function sumRange(num) {
//   if (num === 1) return 1;
//   return num * sumRange(num - 1);
// }
// console.log(sumRange(4));

// function collectOddValues(arr) {
//   let result = [];
//   function helper(helperInput) {
//     if (helperInput.length === 0) return;
//     if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
//     helper(helperInput.slice(1));
//   }
//   helper(arr);
//   return result;
// }
// console.log(collectOddValues([1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 9]));

// function collectOddValues(arr) {
//   let newArr = [];
//   if (arr.length === 0) {
//     return newArr;
//   }
//   if (arr[0] % 2 !== 0) newArr.push(arr[0]);
//   newArr = newArr.concat(collectOddValues(arr.slice(1)));
//   return newArr;
// }
// let x = collectOddValues([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 0]);
// console.log(x);

// function power(b, x) {
//   if (x === 0) return 1;

//   return b * power(b, x - 1);
// }
// console.log(power(2, 5));

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(
//   factorial(4),
//   factorial(1), // 1,
//   factorial(2), // 2
//   factorial(4), // 24
//   factorial(7) // 5040
// );

// function productOfArray(arr) {
//   if (arr.length === 0) return 1;
//   return arr[0] * productOfArray(arr.slice(1));
// }
// console.log(productOfArray([1, 2, 3, 4]));

// function recursiveRange(num) {
//   if (num === 0) return 0;
//   return num + recursiveRange(num - 1);
// }

// console.log(recursiveRange(4));

// function fib(n) {
//   // if ((n = 1)) return 0;
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib());

// function reverse(str) {
//   if (str.length === 1) return str;
//   let newStr = "";
//   newStr += str[str.length - 1] + reverse(str.slice(0, -1));
//   return newStr;
// }

// console.log(reverse("pasta"));

// function reverse(str) {
//   if (str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }

// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;
//   if (str.length === 1) return true;
//   if (str[left] === str[right]) return isPalindrome(str.slice(1, -1));

//   return false;
// }
// console.log(isPalindrome("dod"));

// let isOdd = (val) => val % 2 !== 0;

// function someRecursive(arr, callback) {
//   if (arr.length === 0) return false;
//   if (callback(arr[0])) return true;
//   return someRecursive(arr.slice(1), callback);
// }
// console.log(someRecursive([1, 3, 4, 5], isOdd));

// function flatten(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArray = newArray.concat(flatten(arr[i]));
//     } else newArray.push(arr[i]);
//   }
//   return newArray;
// }

// console.log(flatten([[1, 2, 3], [4, 5, 6], 7]));

// let arr1 = ["mom", "dad", "bro"];

// function capitalizeFirst(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
//   return arr;
// }
// console.log(capitalizeFirst(arr1));

// function capitalizeFirst(array) {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].slice(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
// const string =
//   array.slice(-1)[0][0].toUpperCase() + array.slice(-1)[0].slice(1);
//   res.push(string);
//   return res;
// }
// console.log(capitalizeFirst(arr1));

// function capitalizeFirst(array) {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
//   const string =
//     array.slice(-1)[0][0].toUpperCase() + array.slice(-1)[0].slice(1);
//   res.push(string);
//   return res;
// }
// console.log(capitalizeFirst(arr1));

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" },
// };

// function nestedEvenSum(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       sum += nestedEvenSum(obj[key]);
//     } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
//       sum += obj[key];
//     }
//   }
//   return sum;
// }
// console.log(nestedEvenSum(obj1));

// function capitalizeWords(arr) {
//   if (arr.length === 1) {
//     return [arr[0].toUpperCase()];
//   }
//   let res = capitalizeWords(arr.slice(0, -1));
//   res.push(arr.slice(arr.length - 1)[0].toUpperCase());

//   return res;
// }

// console.log(capitalizeWords(["i", "am", "fine"]));

// function stringifyNumbers(obj) {
//   let newObj = {};

//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }
// let obj1 = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };
// console.log(stringifyNumbers(obj1));

// function collectStrings(obj) {
//   let arrNew = [];
//   function gatherStrings(x) {
//     for (let key in x) {
//       if (typeof x[key] === "string") {
//         arrNew.push(x[key]);
//       } else if (typeof x[key] === "object") {
//         gatherStrings(x[key]);
//       }
//     }
//   }

//   gatherStrings(obj);
//   return arrNew;
// }

// function gatherStrings(x) {
//   for (let key in x) {
//     if (typeof x[key] === "string") {
//       arrNew.push(x[key]);
//     } else if (typeof x[key] === "object") {
//       gatherStrings(x[key]);
//     }
//   }
// }

// gatherStrings(obj);

// const obj1 = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz",
//           },
//         },
//       },
//     },
//   },
// };
// console.log(collectStrings(obj1));

// 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// function calcTips(bill) {
//   let tip;
//   let total;
//   for (let i = 0; i < bill.length; i++) {
//     if (bill[i] >= 50 && bill[i] <= 300) {
//       tip = bill[i] * 0.15;
//     } else {
//       tip = bill[i] * 0.2;
//     }
//     tips.push(tip);
//     total = bill[i] + tip;
//     totals.push(total);
//   }

//   return [tips, totals];
// }

// let x = calcTips(bills);

// console.log(x);

// function calcAverage(arr) {
//   let sum = 0;
//   let ave;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   ave = sum / arr.length;
//   return ave;
// }
// console.log(calcAverage(totals), calcAverage(bills), calcAverage(tips));

// let arr1 = [17, 21, 34];

// // console.log(`${arr[0]}ºC in ${arr.indexOf(arr[0])}days ... `);
// function printForcast(arr) {
//   let message = ``;

//   for (let i = 0; i < arr.length; i++) {
//     message += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   return message;
// }

// console.log("... " + printForcast(arr1));

// let x = [0, 3, 4, 5, 6, 8, 9, 11, 12];

// function linearSearch(arr, num) {
//   if (arr.includes(num)) {
//     return arr.indexOf(num);
//   }
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i] === num) {
//   //     return i;
//   //   }
//   // }
//   return -1;
// }
// console.log(linearSearch(x, 3));

// function binarySearch(arr, num) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   while (arr[middle] !== num && left < right) {
//     if (num < arr[middle]) right = middle - 1;
//     else left = middle + 1;
//     middle = Math.floor((left + right) / 2);
//   }
//   return arr[middle] === num ? middle : -1;
// }
// console.log(binarySearch(x, 12));

// let str1 = "wofhwowjfkfwowcjgw";
// let str2 = "wow";

// function countStrings(long, short) {
//   let count = 0;
//   for (let i = 0; i < long.length; i++) {
//     for (let j = 0; j < short.length; j++) {
//       if (long[i + j] !== short[j]) break;
//       if (j === short.length - 1) count++;
//     }
//   }
//   return count;
// }

// function countStrings(long, short) {
//   let count = 0;
//   for (let i = 0; i < long.length; i++) {
//     for (let j = 0; j < short.length; j++) {
//       if (long[i + j] !== short[j]) break;
//       if (j === short.length - 1) count++;
//     }
//   }
//   return count;
// }

// console.log(countStrings(str1, str2));

// let arr = [0, 2, 1, 1, 2, 3, 4, 57, 3];

// function numberCompare(num1, num2) {
//   return num1 - num2;
// }
// console.log(arr.sort(numberCompare));

// let arr1 = [0, 2, 1, 1, 2, 4, 3, 57, 3];
// // function bubbleSort(arr) {
// //   for (let i = arr.length; i > 0; i--) {
// //     let noSwap = true;
// //     for (let j = 0; j < i - 1; j++) {
// //       console.log(arr, arr[j], arr[j + 1]);
// //       if (arr[j] > arr[j + 1]) {
// //         let temp = arr[j];
// //         arr[j] = arr[j + 1];
// //         arr[j + 1] = temp;
// //         noSwap = false;
// //       }
// //     }
// //     if (noSwap) break;
// //   }
// //   return arr;
// // }

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i++) {
//     let noSwap = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwap = false;
//       }
//     }
//     if (noSwap) break;
//   }
//   return arr;
// }
// console.log(bubbleSort(arr1));

// function narcissistic(value) {
//   let x = value.toString();
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     let y = Math.pow(Number(x[i]), x.length);
//     sum += y;
//   }
//   return sum === value;
// }

// x = 371;

// console.log(narcissistic(x));

// function solution(str) {
//   let arr = [];
//   let sum = "";
//   for (let i = 0; i < str.length; i += 2) {
//     if (i === str.length - 1) {
//       sum = str[i] + "_";
//       arr.push(sum);
//     } else {
//       sum = str[i] + str[i + 1];
//       arr.push(sum);
//     }
//   }
//   return arr;
// }
// function solution(str) {
//   let sum = "";
//   let arr = [];

//   for (let i = 0; i < str.length; i += 2) {
//     if (i === arr.length - 1) {
//       sum = str[i] + "_";
//       arr.push(sum);
//     } else {
//       sum = str[i] + str[i + 1];
//       arr.push(sum);
//     }
//   }
//   return arr;
// }
// let str1 = "abcd";
// let str2 = "abcdefg";
// console.log(solution(str2));

// function selectionSort(arr) {
// for (let i = 0; i < arr.length; i++) {
//   let lowest = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[lowest]) {
//       lowest = j;
//     }
//   }
//   if (i !== lowest) {
//     let temp = arr[i];
//     arr[i] = arr[lowest];
//     arr[lowest] = temp;
//   }
//   console.log(arr);
// }

// return arr;
//   let swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) swap(arr, i, lowest);
//   }
//   return arr;
// }
// console.log(selectionSort([34, 22, 10, 19, 14]));

// function selectionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }

//   return arr;
// }

// selectionSort([34, 22, 10, 19, 14]);

// function insertionSort(arr) {
//   //   for (let i = 1; i < arr.length; i++) {
//   //     let currentVal = arr[i];
//   //     let j = i - 1;
//   //     for (; j >= 0 && arr[j] > currentVal; j--) {
//   //       arr[j + 1] = arr[j];
//   //     }
//   //     arr[j + 1] = currentVal;
//   //   }
//   //   return arr;
//   for (let i = 0; i < arr.length; i++) {
//     let currentVal = arr[i];
//     let j = i - 1;
//     for (; j >= 0 && currentVal < arr[j]; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }
// console.log(insertionSort([2, 1, 9, 76, 5, 68, 4]));

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1]

// let arr = [2, 11, 15, 7];
// let num = 9;

// var twoSum = function (nums, target) {
//   let output = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       console.log(nums[i], nums[j]);
//       if (nums[i] + nums[j] === target) {
//         output.push(i);
//         output.push(j);
//         return output;
//       }
//     }
//   }
//   return -1;
// };

// console.log(twoSum(arr, num));

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// var addTwoNumbers = function (l1, l2) {
//   let output = [];
//   let str1 = "";
//   let str2 = "";
//   for (let i = l1.length - 1; i >= 0; i--) {
//     str1 += l1[i];
//   }

//   for (let i = l2.length - 1; i >= 0; i--) {
//     str2 += l2[i];
//   }

//   let sum = Number(str1) + Number(str2);
//   sum = sum.toString();

//   for (let i = sum.length - 1; i >= 0; i--) {
//     let x = Number(sum[i]);
//     output.push(x);
//   }

//   return output;
// };

// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// Input: s = "abcabcbb";
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

let s = "abcabcbdb";

// var lengthOfLongestSubstring = function (s) {
//   let temp = 0;
//   let max = temp;
//   let i = 0;
//   for (let j = i + 1; j < s.length; j++) {
//     console.log(s[i], s[j], max);
//     if (s[i] !== s[j]) {
//       temp = j - i + 1;
//       max = Math.max(max, temp);
//     } else {
//       i = j;
//     }
//   }

//   return max;
// };
// console.log(lengthOfLongestSubstring(s));

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     longest = Math.max(longest, i - start + 1);
//     seen[char] = i + 1;

//     console.log(seen, start, longest);
//   }
//   return longest;
// }
// console.log(findLongestSubstring(s));

// let lengthOfLongestSubstring = function (s) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     longest = Math.max(longest, i - start + 1);
//     seen[char] = i + 1;
//   }
//   return longest;
// };

// console.log(lengthOfLongestSubstring(s));

let x = 5;
let y = 8;
console.log(x + y);
