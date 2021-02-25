'use strict';

// function logger(y, z) {
//     let x = y + z;
//     console.log(`My name is Mintes! ${x} years old! `)
// }

// // calling / invoking/ running function
// logger(3, 4);
// logger(5, 7);

// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);

// console.log(appleOrangeJuice);


// // function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);

// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Mintes'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }


// console.log(fruitProcessor(2, 3));


// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} already retired`);
//         return -1;
//     }
// }

// // yearsUntilRetirement(1991, 'Mintes');
// console.log(yearsUntilRetirement(1991, 'Mintes'));
// console.log(yearsUntilRetirement(1970, 'Mike'));




// console.log(`Dolphin's average is ${calcAverage(44, 23, 71)}`);
// console.log(`Koala's average is ${calcAverage(65, 54, 49)}`);



// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// //Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {

//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win ✌ (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win ( ${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log(`No team wins`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// //Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 ="michael";
// const friend2 = "steven";
// const friend2 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];

// console.log(friends);

// const year = new Array(1991, 1982, 2008, 2020);
// console.log(friends[0]);
// console.log(year[2]);

// console.log(friends.length);

// console.log(year[year.length - 1]);

// friends[2] = 'Jay';

// console.log(friends);

// const firstName = "Mintes"
// const mintes = [firstName, 'Gebre', 2037 - 1991, 'Designer', friends]
// console.log(mintes);

// // 
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1978, 1879, 2002, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');

// console.log(friends);

// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// const popped = friends.pop();
// console.log(friends);

// console.log(popped);
// friends.shift();

// console.log(friends);

// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Steven'), friends.includes('Bob'));

// const calcTip = function (bill) {
//     if (bill > 50 && bill < 300) {
//         tip = 0.15 * bill;
//     } else {
//         tip = 0.2 * bill;
//     }
//     return tip;
// }

// console.log(calcTip(100));


// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];

// console.log(total);

// const mintesArray = [
//     'Mintes',
//     'Gebre',
//     2037 - 1991,
//     'Designer',
//     ['Abrish', 'Amani', 'Jossy']
// ];

// const jonas = {
//     firstName: 'Mintes',
//     lastName: 'Gebre',
//     age: 2037 - 1991,
//     job: 'Designer',
//     friends: ['Abrish', 'Amani', 'Jossy']
// };

// const mintes = {
//     firstName: 'Mintes',
//     lastName: 'Gebre',
//     age: 2037 - 1991,
//     job: 'Designer',
//     friends: ['Abrish', 'Amani', 'Jossy']
// };

// console.log(mintes);

// console.log(mintes.lastName);
// console.log(mintes['lastName']);

// const nameKey = 'Name';
// console.log(mintes['first' + nameKey]);

// console.log(mintes['last' + nameKey]);


// const interestedIn = prompt('What do you want to know about mintes? choose between firstName, lastName, age, job, friends ');

// console.log(interestedIn);
// console.log(mintes[interestedIn]);

// if (mintes[interestedIn]) {
//     console.log(mintes[interestedIn]);
// } else {
//     console.log('Please try again');
// }

// mintes.location = 'Maryland';
// mintes['fav.book'] = 'Bible';

// console.log(mintes);

// console.log(`${mintes.firstName} has ${mintes.friends.length} friends and his favorite friend is called ${mintes.friends[0]}`);

// const mintes = {
//     firstName: 'Mintes',
//     lastName: 'Gebre',
//     birthYear: 1991,
//     job: 'Designer',
//     friends: ['Abrish', 'Amani', 'Jossy'],
//     hasDriverLicense: true,

//     // calcAge: function (birthyear) {
//     //     return 2037 - birthyear;
//     // }

//     // calcAge: function () {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, that has ${this.hasDriverLicense ? 'a' : "no"} drivers license.`
//     }
// };

// console.log(mintes.calcAge());

// console.log(mintes.age);
// console.log(mintes.age);
// console.log(mintes.age);

// // console.log(mintes.calcAge(mintes.birthYear));
// // console.log(mintes['calcAge'](1991));


// // console.log(`${mintes.firstName} is a ${mintes.age} year old ${mintes.job}, that ${mintes.hasDriverLicense === true ? 'has a drivers lisence' : 'has no drivers lisence'})`);
// console.log(mintes.getSummary());    

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     },
//     getSummery: function () {
//         return `${this.fullName} weighs ${this.mass} and is ${this.height}m tall. So his BMI is ${this.calcBMI}.`;
//     }
// }

// console.log(mark.calcBMI());
// console.log(mark.BMI);

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     },
//     getSummary: function () {
//         return `${this.fullName} weighs ${this.mass} and is ${this.height}m tall. So his BMI is ${this.calcBMI}.`;
//     }
// }

// console.log(john.calcBMI());
// console.log(john.BMI);

// console.log(`${john.BMI > mark.BMI ? "John's" : "Mark's"} BMI is higher with ${mark.BMI} `);

// for (let rep = 1; rep <= 10; rep++) {
//     console.log('Lifting weights repetitions ' + rep + ' ✌')
// }

// const mintes = [
//     'Mintes',
//     'Gebre',
//     2037 - 1991,
//     'Designer',
//     ['Abrish', 'Amani', 'Jossy'],
//     true
// ];

// const types = [];


// for (let i = 0; i < mintes.length; i++) {
//     console.log(mintes[i], typeof mintes[i]);

//     //types[i] = typeof mintes[i];
//     types.push(typeof mintes[i]);
// };

// console.log(types);

// const years = [1991, 2007, 2001, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// for (let i = 0; i < mintes.length; i++) {
//     if (typeof mintes[i] !== 'string') continue;

//     console.log(mintes[i], typeof mintes[i]);
// }

// for (let i = 0; i < mintes.length; i++) {
//     if (typeof mintes[i] === 'number') break;

//     console.log(mintes[i], typeof mintes[i]);
// }


// const mintes = [
//     'Mintes',
//     'Gebre',
//     2037 - 1991,
//     'Designer',
//     ['Abrish', 'Amani', 'Jossy']
// ];

// for (let i = (mintes.length - 1); i >= 0; i--) {
//     console.log(i, mintes[i]);
// }


// for (let ex = 1; ex < 4; ex++) {

//     console.log(`----- starting exercise ${ex}`);


//     for (let rep = 1; rep < 6; rep++) {

//         console.log(`Repeat exercise ${ex}: ${rep} times`);
//     }
// }


// let x = 1;
// while (x <= 10) {
//     console.log(`Lifting weight ${x} times `)
//     x++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;


// console.log(dice);

// while (dice !== 6) {
//     console.log(dice);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }
// console.log(`Congrats ! `);

// const calcTip = function (bills) {
//     return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// }


// const bills = [
//     22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
// ]
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);

// }

// console.log(bills, tips, totals);

// const calcTip = function (bills) {
//     return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// }

// const bills = [
//     22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
// ]

// const tips = [];
// const total = [];

// for (let i = 0; i <= bills.length - 1; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     total.push(tip + bills[i]);

// }
// console.log(bills);
// console.log(tips);
// console.log(total)


const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];

const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // ave = sum / arr.length;
    return sum / arr.length;
}

console.log(totals);
console.log(calcAverage(totals));


// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     // ave = sum / arr.length;
//     return sum / arr.length;
// }

// console.log(calcAverage(totals));
