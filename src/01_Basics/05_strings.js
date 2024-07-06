const name = "kuldeep";
const repoCount = 50;


console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("kuldeep");
console.log(gameName[0]);
console.log(gameName.__proto__); //visible in browser

//methods in prototype
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('z'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4); 
console.log(anotherString);

const newStringOne = "  kuldeep.     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chodhary";
console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));

const newStringTwo = "kuldeep-hussain-chaudhary";
console.log(newStringTwo.split("-"));

//Output
// kuldeep50 Value
// Hello my name is kuldeep and my repo count is 50

// S
// {}

// 8
// kuldeep
// r
// 7

// Sarf

// Sarf

//   kuldeep.     
// kuldeep.

// https://hitesh.com/hitesh-chodhary

// true

// [ 'kuldeep', 'hussain', 'chaudhary' ]
