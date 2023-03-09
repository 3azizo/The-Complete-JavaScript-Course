'use strict';
/*
const bookings = [];
const createBooking = function (
  flightnum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightnum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123', 10);
*/
/*
const removeWhiteSp = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const UpperFristWord = function (str) {
  const [frist, ...others] = str.split(' ');
  return [frist.toUpperCase(), ...others].join(' ');
};
// console.log(removeWhiteSp('Javascrit is the best!'));
// console.log(UpperFristWord('Javascrit is the best!'));
// higher-order function
const transformer = function (str, fun) {
  console.log(`transformed string:${fun(str)}`);
};
transformer('Javascrit is the best!', removeWhiteSp);
transformer('Javascrit is the best!', UpperFristWord);
*/
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// arrow fun
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// // console.log(greet('hi'));
// const greeterHey = greet('hey');
// greeterHey('jonas');
// greeterHey('3azizo');
// greet('hello')('jonas');
///////////////////(coding challenge)//////////////
// const poll = {
//   question: 'what is your favourite programming language?',
//   options: ['0:javascript', '1:python', '2: Rust', '3:C++'],
//   answers: new Array(4).fill(0),
//   // registerNewAnswer() {
//   //   console.log('what is your favourite programming language?');
//   //   for (const lang of Object.values(this.options)) {
//   //     console.log(`${lang}`);
//   //   }
//   //   let yourAnswer = Number(prompt('inter your answers'));
//   // },
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}`)
//     );
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if ((type = 'string')) {
//       console.log(`pool results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// poll.displayResults.call({ answers: [4, 2, 3] });
// (function () {
//   console.log('done');
// })();
/////////////////////////(closures=>12)///////////////////
/*
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker(); //=>1 passengers
booker(); //=>2 passengers
booker(); //=>3 passengers
// keep in your mend difference between two way =>frist way scureBooking execution one time but in second excution every time.
// secureBooking()();// =>1 passengers
// secureBooking()();// =>1 passengers
// secureBooking()();//=>1 passengers
console.dir(booker);
console.dir(secureBooking);
console.dir(secureBooking());
*/
///////////////////////////(more examples||closures =>13)/////////////////////
//1.
/*
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  const a = 333;

  f = function () {
    console.log(b + a);
  };
};
g();
f();
//re-assigning f function
h();
f();
console.dir(f);
*/
//2.example
/*
const boardPassengers=function(n,wait){
  const perGroup=n/3;
  setTimeout(function(){
    console.log(`we are now boarding all ${n} passengers`)
    console.log(`There are 3 groups,eachb with ${perGroup} passengers`)
  },wait*1000)
}
boardPassengers(180,3)
*/
///////////////(coding challenge =>14)////////////////////////////
/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
    setTimeout(() => {
      header.style.color = 'red';
    }, 1000);
  });
})();*/
