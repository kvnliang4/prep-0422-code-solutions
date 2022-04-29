// create your loops here.
let numPlusOne = 0;

for (let i = 0; i < 10; i++) {
  numPlusOne = i;
  console.log(numPlusOne);
}

let numPlusTwo = 0;

for (let i = 0; i < 20; i+=2) {
  numPlusTwo = i;
  console.log(numPlusTwo);
}

let countdown = '';

for ( let i = 100; i > 0; i--) {
  countdown = "Time left till explosion " + i;
  console.log(countdown);
}
