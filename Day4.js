// Regular Functions in JS
/*Declaration
Calling the function
function greetUser(name,time){
  console.log(`${time} ${name}`)
}
greetUser("Satya","Morning")


function sumOfTwoNumbers(number1, number2){
  console.log(`Sum of ${number1} and ${number2} is ${number1+number2}`)
}
sumOfTwoNumbers(1,2)



//Sum using return

function addTwo(num1, num2){
  return num1 + num2;
}
console.log(addTwo(2,5))

//Task -1

function convertUsdToAud(USD){
return USD * 1.5
}
console.log(convertUsdToAud(500)); */

// Arrow Functions

// const convertUsdToAud = (USD) => {
// return USD * 1.5
// }
// console.log(convertUsdToAud(1000))

/*
1. Check Even or Odd
Task: Return "even" if a number is even, otherwise "odd".

Input: 7

Expected Output: "odd"

const evenOdd = (number) =>{
  let n = number % 2 == 0? 'Even':`Odd`;
  return n;
}
console.log(evenOdd(7))

/*

2. Multiply Two Numbers
Task: Return the product of two numbers.

Input: 4, 5

Expected Output: 20
//Method -1
const mulTwoNumbers = (num1,num2) =>{
  let res = num1 * num2
  return res;
}
console.log(mulTwoNumbers(4,5))
//Method - 2
const mulTwoNumber = (a, b) => a * b;
console.log(mulTwoNumber(4,5)) */

/*3. Get Character at Index
Task: Return the character at a specific index in a string.

Input: "hello", 1

Expected Output: "e"

//Method -1
const indexReturn = (str,index) =>{
  let result = str[index]
  return result;
}
console.log(indexReturn("Hello",1))

// Method -2
const indexReturn = (str, index) => str[index];
console.log(indexReturn("Hello",1))*/


/*4. Convert to Uppercase
Task: Convert a string to all uppercase letters.

Input: "hello"

Expected Output: "HELLO"

const uppercase = (string) => string.toUpperCase();
console.log(uppercase("hello"))

const uppercase = (string) => string.toLowerCase();
console.log(uppercase("HELLO"))
*/

/*

5. Get Last Character of a String
Task: Return the last character of a string.

Input: "world"

Expected Output: "d"


// const lastChar = (str) => str[str.length-1]
// console.log(lastChar("world"))

// const last = (str) => {
//   return str[str.length-1]
// }
// console.log(last('hello'))
*/


/*
6. Square a Number
Task: Return the square of a number.

Input: 6

Expected Output: 36*/

// const numSquare = (number) => number * number;
// console.log(numSquare(6))


/*
7. Check If String Contains Substring
Task: Return true if the word contains a given substring.

Input: "javascript", "script"

Expected Output: true
*/

/*
// const subS = (str,sub) => str.toLowerCase().includes(sub.toLowerCase())
// console.log(subS("Javascript","script"))

function result (str, sub){
  upCase = str.toLowerCase()
  lwCase = sub.toLowerCase()
  output = upCase.includes(lwCase)
  return output
}
console.log(result("Javascript","java"))*/


/*

8. Repeat a Word Multiple Times
Task: Repeat a word n times.

Input: "hi", 3

Expected Output: "hihihi" 

 const repeatWord = (word, times) => word * times
console.log(repeatWord("hi", 3))

const result = (str, sub) => {
  let upCase = str.toLowerCase()
  let lwCase = sub.toLowerCase()
  let output = upCase.includes(lwCase)
  return output
}
console.log(result("Javascript","jaa"))

//Arrays

// let fruits = [20,5,30, 12];

// let sorted = fruits.filter(index =>{
// return index <= 15;
// })
// console.log(sorted)*/


//Tasks on filter array method

/* Task 1: Filter Odd Numbers
Given an array of numbers, return only the odd numbers.

Example Input:
[10, 15, 22, 33, 40, 55]

Expected Output:
[15, 33, 55] 
let oddNums = [10, 15, 22, 33, 40, 55]

let odds = oddNums.filter( n => n %2!==0);

console.log(odds);*/

/*
Task 2: Filter Short Words
From an array of words, return only the words with 4 or fewer characters.

Example Input:
["tree", "sun", "mountain", "sky", "cloud"]

Expected Output:
["tree", "sun", "sky"]


let shortWord = ["tree", "sun", "mountain", "sky", "cloud"];

let threeWords = shortWord.filter(w => w.length <= 4);
console.log(threeWords); */

/*
Task 3: Filter Adults
You have an array of ages. Return only those who are 18 or older.

Example Input:
[12, 19, 8, 21, 16, 30]

Expected Output:
[19, 21, 30

let ages = [12, 19, 8, 21, 16, 30]

let ageOfAdults = ages.filter( age => age >= 18)
console.log(ageOfAdults)
*/


/*
 Task 4: Filter Prices Over 100
Given an array of product prices, return only the prices greater than 100.

Example Input:
[50, 120, 30, 200, 75, 180]

Expected Output:
[120, 200, 180]


let prices = [50, 120, 30, 200, 75, 180]

let greaterPrice = prices.filter(price => price > 100 )

console.log(greaterPrice)

//Filter age not 18+

// let ages = [10, 12, 18, 19,28, 49, 12]

// let entryClub = ages.filter(age => age <=  18)
// console.log(entryClub)

let ages = [18, 20, 15, 16, 21]

let adults = []

for (let i = 0; i < ages.length; i++){
    if(ages[i] >= 18)
        adults.push(ages[i])
 }
 console.log(adults)

 //.map

 let array = [10, 12, 18, 19,28, 49, 12]

 let newArray = array.map(element => 1)
 console.log(newArray)

 // USD to AUD converter using .map

 let usDollars = [10, 20, 30, 40]

 let auDollars = usDollars.map(aud => aud * 1.5)

 console.log(auDollars)

 let usDollars = [10, 20, 30, 40]

 console.log(usDollars.length)
 let auDollars = []

 for(let i = 0; i < usDollars.length; i++)
    auDollars.push(usDollars[i] * 1.5)

 console.log(auDollars) */