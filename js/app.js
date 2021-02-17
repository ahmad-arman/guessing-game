'use strict';
let score = 0;
let Name = prompt('what is your name ?');
alert('welcome' + ' ' + Name + ' ' + 'in our page');

let tea = prompt('do you love tea?', 'yes,no');
tea = tea.toLocaleLowerCase();

if (tea === 'yes' || tea === 'y') {
  alert('enjoy with drink tea');
  score++;
  //console.log('enjoy with drink tea');

}
else {
  if (tea === 'no' || tea === 'n') {
    alert('your lose');
    console.log('your lose');
  } else {
    alert(' your answer must be yes or no   ');
    console.log(' your answer must be yes or no');
  }
}

let coffie = prompt('do you love coffie? you must write YES ,Y,NO,N all of them capital letter', 'yes,no');

if (coffie === 'YES' || coffie === 'Y') {
  alert('enjoy with drink coffie');
  console.log('enjoy with drink coffie');
  score++;
} else {
  if (coffie === 'No' || coffie === 'N') {
    alert('your lose');
    // console.log('your lose');
  } else {
    alert('your answer must be YES or NO ');
    console.log('your answer must be YES or NO');
  }
}

let friend = prompt('can you become my friend ?', 'yes,no');
friend = friend.toLocaleLowerCase();

if (friend === 'yes' || friend === 'y') {
  alert('thank you bro ,it is my pleasure');
  score++;
  //console.log('thank you bro ,it is my pleasure');
}
else {
  if (friend === 'no' || friend === 'n') {
    alert('your lose ');
    console.log('your lose');//don not delet console.log
  } else {
    alert(' your answer must be yes or no   ');
    console.log(' your answer must be yes or no');
  }
}


let rich = prompt('do you thing i wiil become rich man ?', 'yes,no,y,n');
rich = rich.toLocaleLowerCase();

if (rich === 'yes' || rich === 'y') {
  alert('thank you bro, i wish will become rich man allso');
  score++;
  // console.log('thank you bro, i wish will become rich man allso');

}
else {
  if (rich === 'no' || rich === 'n') {
    alert('why you carry negative feel?!');
    console.log('why you carry negative feel?!');

  } else {
    alert(' your answer must be yes or no   ');
    //console.log(' your answer must be yes or no');
  }
}



let good = prompt('are you good man  ?', 'yes,no,y,n');
good = good.toLocaleLowerCase();

if (good === 'yes' || good === 'y') {
  alert('that is great');
  score++;
  //console.log('that is great');

}
else {
  if (good === 'no' || good === 'n') {
    alert('i wish become good man ');
    console.log('i wish become good man');
  } else {
    alert(' your answer must be yes or no   ');
    //console.log(' your answer must be yes or no');
  }
}

alert('Than you ' + ' ' + Name + ' ' + 'to visit my page');

let guss = 0;
let gussNumber;


while (guss < 4) {
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

  ++guss;

}

let arr = ['coffie', 'tea', 'water', 'juice', 'moka', 'milk'];
let num = 0;
let gussdrink;

while (num < 6) {
  gussdrink = prompt('What my favorite drink?', 'milk,tea,water,coffie,juice');

  if (gussdrink === arr[1]) {
    alert('corect answer,my favorite drink is tea ');
    score++;
    break;
  }
  else if (gussdrink === arr[0]) {
    alert(' corect answer,my favorite drink is coffie ');
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
    ++num;
  }
}
alert('your result is ' + score + ' out of 7');

