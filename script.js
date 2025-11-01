let userName = prompt("Введіть ваше ім'я:");
alert(`Hello, ${userName}! Welcome to JavaScript`);

let age = prompt("Введіть ваш вік:");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
alert(`You were born in ${birthYear}`);

let firstName = prompt("Введіть ваше ім'я:");
let lastName = prompt("Введіть ваше прізвище:");

console.log("Your full name is " + firstName + " " + lastName);

console.log(`Your full name is ${firstName} ${lastName}`);