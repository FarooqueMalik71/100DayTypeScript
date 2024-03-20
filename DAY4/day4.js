"use strict";
//🚀 *Day 4 Challenge: Start Coding!* 🚀
//*Question 10:* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. //If the programs are straightforward at this point, just add your name and the current date at the top of each //program file. Then, write one sentence describing what the program does.
// Farooque, 2024-03-15
// This program prints a personal message.
let myName = "Farooque Malik";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);
//*Question 11:* Names: Store the names of a few of your friends/city in an array called names. Print each person’s name //by accessing each element in the list, one at a time.
let city = ["Mirpurkhas", "Tando", "karachi", "hydrabad"];
for (let i = 0; i < city.length; i++) {
    console.log(city[i]);
}
//*Question 12:* Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a //message to them. The message should be the same for each person, but personalized with their name.
let names = ["Ali", "Fahad", "Malik", 'Farooque'];
for (let i = 0; i < names.length; i++)
    ;
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today? `);
}
