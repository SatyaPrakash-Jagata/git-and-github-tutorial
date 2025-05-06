// Using let as variable declaration
/*let string = 'Hello World'
console.log(string[2])
console.log(string.length)
console.log(string[string.length-1])

console.log(Boolean("1"))
let userEmail = 'connectwithsatya333@gmail.com';

let age = 18;

console.log(age);

console.log(userEmail);

age = age + 1;
age = 50

console.log(age); */

//Using Const as variable declaration
/*const nameUser = `Hello`

const ageNa = 100

console.log(nameUser)
console.log(ageNa)

ageNa = 50;
console.log(ageNa)*/

//Task Convert AUD to USD
/*let USD = 1200;

let AUD = USD * 1.5;

console.log("USD to ASD is ", AUD);*/

/*let hasMembership = false;
let signedIn = true;

if (hasMembership === true && signedIn === true) {
  console.log("Show the tutorial");
} else if (signedIn === true && hasMembership === false) {
  console.log("Upgrade Now");
} else {
  console.log("User has no Membership");
}*/

/*let age = 17

if(age !== 18){

console.log(`${age} is greater than 18`)
}
else if(age === 18){
    console.log(`${age} is equals to 18`)
}
else{
    console.log(`${age} is less than 18`)
}*/

/*Check if a number is positive
If a number is greater than 0, print "Positive".

Check if a user is an adult
If the age is 18 or more, print "Adult".

Check if a string contains a specific word
If a string includes the word "JavaScript", print "Found".

Check if a number is divisible by 5
If a number is divisible by 5, print "Divisible by 5".

Check if a password is long enough
If the password is 8 characters or more, print "Valid password".

let isNumber = 6;

isNumber > 0 ? console.log(`${isNumber} is positive`): console.log(`${isNumber} is negative`);

let isNumber = 100;

isNumber % 5 === 0 ? console.log(`${isNumber} is diisible by 5`): console.log(`${isNumber} is not diisible by 5`);

Check if a user is an adult If the age is 18 or more, print "Adult

let age = 19;

age >= 18 ? console.log("Adult"): console.log("Minor");

Check if a password is long enough If the password is 8 characters or more, print "Valid password"

let password = "satya@0123";

password.length >= 8
  ? console.log("Valid password")
  : console.log("Invalid password");


let loggedIn = true

let hasMembership = true

loggedIn && hasMembership ? console.log("Show Video"): console.log(" don't Show Video");  */

//While loop
// let count = 1;

// while(count <= 10 ){
//   console.log(count)
//   count++
// }

// for loop

// for(let i = 1; i <= 40; i++){

//   if (i %2!==0){
//     console.log(i)
//   }
  
// }

// Task -1
/* 
-->Run for loop from 1 to 15
--Odd console "ASAP"
--Even console "Frontend"
--Divisible by 5 "ASAP Frontend"
*/

/*
for(let i = 1; i <= 15; i++){
  if(i % 5 ===0){
    console.log("ASAP Frontend",i)
  }
  else if(i % 2 === 0){
    console.log("ASAP",i)
}
  else if(i % 2 !== 0)
    console.log("Frontend")
}*/

//Task -2
// Console all the letters individually 'ASAP Frontend'

let word = "ASAP Frontend"
for(let i = 0; i < word.length; i++){
  console.log(word[i]);
 }

//Task -3
// Print each character of a sentence in reverse order.
// – For example, given "Frontend", print each letter from the end to the beginning.

// let word = "ASAP Frontend"
// for(let i = word.length - 1; i <= word.length; i--){
//   console.log(word[i]);
//  }

// let Nword = "ASAP Frontend"
// for(let i = 0; i < Nword.length; i++){
//   console.log(Nword[i]);
//  }
 
// let word = "ASAP Frontend"
// for(let i = word.length - 1 ; i >=0; i--){
//   console.log(word[i]);
//  }


// Count how many vowels are in a given word or sentence.
// – For example, count vowels in "ASAP Frontend".

// let word = "ASAP Frontene"
// let count = 0;

// for(i = 0; i <= word.length; i++){
//     if(word[i] ==='a' || word[i] ==='e' || word[i]=='i' || word[i]=='o'|| word[i]=='u'){
//         count+=1
//     }
// }console.log(count);



//Task 3: Print only the characters at even indexes of a string
// Example: In "Frontend", print characters at positions 0, 2, 4, 6, etc.

// Expected output: F, o, t, n
let str = "Frontend"

for(let i = 0; i < str.length; i++){
    
    if(i % 2 ===0 ){
        console.log(str[i])
    }

}






