// Exercise 1: Temperature check
let temperature = 22;

if (temperature < 0) {
  console.log("It's freezing");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold");
} else if (temperature > 15 && temperature <= 25) {
  console.log("It's warm");
} else {
  console.log("It's hot");
}

// Using switch for same logic 
switch (true) {
  case temperature < 0:
    console.log("It's freezing");
    break;
  case temperature <= 15:
    console.log("It's cold");
    break;
  case temperature <= 25:
    console.log("It's warm");
    break;
  default:
    console.log("It's hot");
    break;
}

// Exercise 2: Divisibility Check
let num = 12;

if (num % 2 === 0 && num % 3 === 0) {
  console.log("Divisible by both 2 and 3");
} else if (num % 2 === 0) {
  console.log("Divisible by 2 only");
} else if (num % 3 === 0) {
  console.log("Divisible by 3 only");
} else {
  console.log("Not divisible by 2 or 3");
}

// Rewrite using switch
switch (true) {
  case (num % 2 === 0 && num % 3 === 0):
    console.log("Divisible by both 2 and 3");
    break;
  case (num % 2 === 0):
    console.log("Divisible by 2 only");
    break;
  case (num % 3 === 0):
    console.log("Divisible by 3 only");
    break;
  default:
    console.log("Not divisible by 2 or 3");
}

// Exercise 3: For loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100:", sum);

let numbers = [2, 4, 6, 8, 10];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let nums = [3, 6, 9, 12];
for (let i = 0; i < nums.length; i++) {
  console.log("Current:", nums[i]);
  console.log("Previous:", nums[i - 1]);
}

// Exercise 4: While loops
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

i = 1;
sum = 0;
while (i <= 100) {
  sum += i;
  i++;
}
console.log("Sum using while:", sum);

i = 1;
while (i <= 50) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// Exercise 5: Do While loop
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Guessing game (simplified example)
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
  guess = parseInt(prompt("Guess the number between 1-100:"));
} while (guess !== secretNumber);

console.log("Correct! The secret number was", secretNumber);
