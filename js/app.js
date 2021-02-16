
let Name = prompt('what is your name ?');
alert('welcome' + ' ' + Name + ' ' + 'in our page');

let tea = prompt('do you love tea?', 'yes,no');
tea = tea.toLocaleLowerCase();

if (tea === 'yes' || tea === 'y') {
  alert('enjoy with drink tea');
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







