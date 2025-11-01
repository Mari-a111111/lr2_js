// 1) Запит імені та виведення привітання через alert
let userName = prompt("Введіть ваше ім'я:");
alert(`Hello, ${userName}! Welcome to JavaScript`);

// 2) Запит віку та розрахунок року народження
let age = prompt("Введіть ваш вік:");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
alert(`You were born in ${birthYear}`);

// 3) Запит імені та прізвища, виведення повного імені двома способами
let firstName = prompt("Введіть ваше ім'я:");
let lastName = prompt("Введіть ваше прізвище:");

// Через конкатенацію (+)
console.log("Your full name is " + firstName + " " + lastName);

// Через шаблонний рядок
console.log(`Your full name is ${firstName} ${lastName}`);