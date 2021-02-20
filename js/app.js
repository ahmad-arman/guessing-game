'use strict';
let score = 0;
let myTea;
let myCoffee;
let myAge;
let rich;
let good;
let Name = prompt('what is your name ?');
alert('welcome' + ' ' + Name + ' ' + 'in our page');
const questionTea = function () {
  myTea = prompt('Do I love tea?', 'yes,no');
  myTea = myTea.toLocaleLowerCase();
  if (myTea === 'yes' || myTea === 'y') {
    alert('correct answer!');
    score++;

  }
  else {
    if (myTea === 'no' || myTea === 'n') {
      alert('Wrong answer!');

    } else {
      alert(' your answer must be yes or no   ');

    }
  }
};
const questionCoffee = function () {
  myCoffee = prompt('Do I love Coffee? you must write YES ,Y,NO,N all of them capital letter', 'yes,no');
  if (myCoffee === 'YES' || myCoffee === 'Y') {
    alert('Correct answer!');

    score++;
  } else {
    if (myCoffee === 'No' || myCoffee === 'N') {
      alert('Wrong answer!');

    } else {
      alert('your answer must be YES or NO ');

    }
  }
};
const questionAge = function () {
  myAge = prompt('Am I 25 years old?', 'yes,no');
  myAge = myAge.toLocaleLowerCase();
  if (myAge === 'yes' || myAge === 'y') {
    alert('Wrong answer!');

  }
  else {
    if (myAge === 'no' || myAge === 'n') {
      alert('Correct answer! ');

      score++;
    } else {
      alert(' your answer must be yes or no   ');

    }
  }
};
const questionRich = function () {
  rich = prompt('Am I a rich man?', 'yes,no,y,n');
  rich = rich.toLocaleLowerCase();
  if (rich === 'yes' || rich === 'y') {
    alert('Wrong answer!');

  }
  else {
    if (rich === 'no' || rich === 'n') {
      alert('Correct answer!');
      console.log('Correct answer!');
      score++;
    } else {
      alert(' your answer must be yes or no   ');

    }
  }
};
const questionGood = function () {
  good = prompt('Am I a good man?', 'yes,no,y,n');
  good = good.toLocaleLowerCase();
  if (good === 'yes' || good === 'y') {
    alert('Correct answer!');
    score++;

  }
  else {
    if (good === 'no' || good === 'n') {
      alert('Wrong answer!');

    } else {
      alert(' your answer must be yes or no   ');

    }
  }
};
const questionNumber = function () {
  let guss = 0;
  let gussNumber;
  while (guss < 4 && gussNumber !== Text) {
    gussNumber = prompt('guss number');


    if (gussNumber > 5) {
      alert('too high');
    }
    else if (gussNumber < 5) {
      alert('too low');
    }
    else if (gussNumber === '5') {
      alert('corecct answer');
      score++;
      break;
    }
    if (guss === 3) {
      alert('Sorry, you couldnt guess the number, it was 5');
    }
    ++guss;
  }
};
const questionDrink = function () {
  let arr = ['coffee', 'tea', 'water', 'juice', 'moka', 'milk'];
  let num = 0;
  let gussdrink;
  while (num < 6 && (arr[0] === 'coffee' || arr[1] === 'tea' || arr[2] === 'water' || arr[3] === 'juice' || arr[4] === 'moka' || arr[5] === 'milk')) {
    gussdrink = prompt('What my favorite drink?', 'milk,tea,water,coffee,juice');
    if (gussdrink === arr[1]) {
      alert('corect answer,my favorite drink is tea ');
      score++;
      break;
    }
    else if (gussdrink === arr[0]) {
      alert(' corect answer,my favorite drink is coffee ');
      score++;
      break;
    }
    else if (gussdrink === arr[2]) {
      alert('it is not my favorite drink');
    }
    else if (gussdrink === arr[3]) {
      alert('it is not my favorite drink');
    }
    else if (gussdrink === arr[4]) {
      alert('it is not my favorite drink');
    }
    else if (gussdrink === arr[5]) {
      alert('it is not my favorite drink');
    }
    if (num === 5) {
      alert('Sorry, you couldnt guess my favorite drinks, it tea and coffee!');
    }
    num++;
  }
};
questionTea();
questionCoffee();
questionAge();
questionRich();
questionGood();
questionNumber();
questionDrink();
alert('your result is ' + score + ' out of 7');
alert('Thank you ' + ' ' + Name + ' ' + 'to visit my page');




