// Conditionals

function checkNumber(number) {
  if (number > 0) {
    console.log('number positive.');
  } else if (number < 0) {
    console.log('number negative.');
  } else {
    console.log('number zero.');
  }
}

checkNumber(5); // => number positive
checkNumber(-3); // => number negative
checkNumber(0); // => number zero
