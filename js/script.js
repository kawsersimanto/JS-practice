// data types in JS

// primitives

const number = 10;
const string = "hello";
const bool = true;
const value = undefined;
const empty = null;

// non primitives

const user = {
  id: 1,
  firstName: "john",
  lastName: "smith",
  email: "example@gamil.com",
  isVerified: true,
};
const arr = [1, 2, 3, 4, 5];

const users = [
  {
    id: 1,
    firstName: "john",
    lastName: "smith",
    email: "example1@gamil.com",
    isVerified: true,
  },
  {
    id: 2,
    firstName: "mosh",
    lastName: "hamedani",
    email: "example2@gamil.com",
    isVerified: false,
  },
  {
    id: 3,
    firstName: "brad",
    lastName: "traversy",
    email: "example3@gamil.com",
    isVerified: true,
  },
];

const mixedArray = [
  1,
  "name",
  true,
  { title: "New Day", author: "author name" },
];

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Kamal Khan", 23);

// functions in JS

function square(number) {
  return number * number;
}

function areaOfCircle(radius) {
  const PI = 3.1416;
  return (PI * radius ** 2).toFixed(2);
}

function sumOf(n) {
  return (n * (n + 1)) / 2;
}

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 === 1;
}

function leapYear(year) {
  return (year % 400 == 0 || year % 100 != 0) && year % 4 == 0;
}

function factorial(number) {
  if (number < 0) return -1;
  else if (number === 0) return 1;
  else {
    for (let i = number - 1; i >= 1; i--) {
      number *= i;
    }
  }
  return number;
}

function toFarenheit(celcius) {
  return (celcius * 1.8 + 32).toFixed(2);
}

function areaOfTriangle(base, height) {
  return ((1 / 2) * base * height).toFixed(2);
}

function maximum(arr) {
  let maxNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) maxNumber = arr[i];
  }
  return maxNumber;
}

// events is JS

function displayClicked() {
  const paragraph = document.getElementById("output");
  paragraph.textContent = "button clicked";
}

function changeColor() {
  const box = document.getElementById("box");
  box.style.backgroundColor = "red";
}

function displayKey() {
  const inputValue = document.getElementById("input").value;
  const show = document.getElementById("show");
  show.textContent = inputValue;
}
