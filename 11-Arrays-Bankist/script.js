'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
//8.
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // let allMov = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `        
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    // allMov += html;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });

  // containerMovements.innerHTML = allMov;
};
//
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currntAccount.movements, !sorted);
  sorted = !sorted;
});

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(char => char[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

// event handler
let currntAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent
  e.preventDefault();

  currntAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  // console.log(currntAccount);
  if (currntAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and welcome message
    labelWelcome.textContent = `welcome Back,${
      currntAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currntAccount);
  } else {
    labelWelcome.textContent = `log in agian!`;
    inputLoginUsername.value = inputLoginPin.value = '';
    containerApp.style.opacity = 0;
    let alertDiv = document.querySelector('.alert');
    setTimeout(() => {
      alertDiv.style.opacity = 1;
    }, 500);
    setTimeout(() => {
      alertDiv.style.opacity = 0;
    }, 3000);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  // console.log(amount, reciverAcc);
  if (
    amount > 0 &&
    reciverAcc &&
    currntAccount.balance >= amount &&
    reciverAcc?.userName !== currntAccount.userName
  ) {
    //doing the transfer
    console.log('transfer valid');
    currntAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
    updateUI(currntAccount);
  }
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  // some=> true||false :eny=>CONDITION
  const amount = parseInt(inputLoanAmount.value);
  if (amount > 0 && currntAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add
    currntAccount.movements.push(amount);
    //update
    updateUI(currntAccount);
  }
  inputLoanAmount.value = '';
});
//
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currntAccount.userName &&
    Number(inputClosePin.value) === currntAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currntAccount.userName
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
    // console.log(index);
  }

  inputCloseUsername.value = inputClosePin.value = '';
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/////1.intro///2.LEC(simple Arrray Methods)/////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
let arr2 = arr.slice(); //copy don't effect arr
let arr3 = [...arr]; //copy don't effect arr
arr2.pop();
arr3.push('f');
console.log(arr, arr2, arr3);
//SPLICE
console.log('#'.repeat(20));
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);
//REVERSE
console.log('#'.repeat(20));
arr = ['a', 'b', 'c', 'd', 'e'];
let arr21 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr21.reverse());
console.log(arr21);
//CONCAT
const letters = arr.concat(arr21);
console.log(letters); //same=>
console.log([...arr, ...arr21]);
// JOIN
console.log(letters.join('-'));
*/
//////////////////3.LEC(New Method(at))////////////////////
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr[arr.length - 1]);
console.log(arr.at(-2));
*/
///////////////4.LEC(forEach)//////////////////
/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('_'.repeat(10) + 'forEach' + '_'.repeat(10));
movements.forEach((movement, i, arr) => {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});*/
////////////////5.LEC(forEach=> maps || sets)////////////////
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});
// set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, set) => {
  console.log(`${value}:${value}`);
});
// console.log(currencies);
*/
///////////7.LEC(project_Bankist)////////////
/////////////////9.LEC(coding Challenge)/////
///julia && kate 2array
/*
function checkDogs(dogsJulia, dogsKate) {
  let dogsJuliaSC = dogsJulia.slice(1, -1);
  let both = dogsJuliaSC.concat(dogsKate);

  both.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`dog number ${i + 1} is an adult ,and is ${dog} years old`);
    } else {
      console.log(`dog number ${i + 1} is still a puppy🐶`);
    }
  });
}
checkDogs([2, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('###############################');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
// const depositsFor = movements.filter(move => move > 0);
// const withdrawals = movements.filter(move => move < 0);
// console.log(withdrawals);
// const maximum = movements.reduce((max, move) => {
//   // if (max > move) {
//   //   return max;
//   // } else if (max <= move) {
//   //   return move;
//   // }
//   return max <= move ? move : max;
// });
// console.log(maximum);
/////////////(challenge2)////////////////
/*
function CalcHumanAge(dataT) {
  let humanAge = dataT.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  console.log(humanAge);
  //
  let adultDogs = humanAge.filter(humanYear => humanYear >= 18);
  console.log(adultDogs);
  //
  let average = adultDogs.reduce((acc, dog) => acc + dog, 0) / adultDogs.length;
  return average;
}
const avg1 = CalcHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = CalcHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/
// /////////////////(challenge)///////////////
/*
let CalcHumanAge = dataT =>
  dataT
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanYear => humanYear >= 18)
    .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);

const avg1 = CalcHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = CalcHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/
/*
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc.owner);
  }
}
console.log(account);*/
// every =>kol
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
// console.log(arr.flat());
/////////////2.4(LEC:sort)///////////
/*
const owners = ['jonas', 'zach', 'adam', 'martha'];
console.log(owners);
console.log(owners.sort());
console.log(owners);

//return < 0 keep order
//return > 0  switch order

// Ascendeing
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/
////////////25.LEc(more ways creating && filling Arrays)
/*
const fromArray = Array.from({ length: 7 }, (_, i) => {
  console.log(i); //arr and current is undefined bec=>emity
  return 25 * i;
});
console.log(fromArray);

// const randomD = Array.from({ length: 100 }, () => {
//   return Math.floor(Math.random() * 6 + 1);
// });
// console.log(randomD);
labelBalance.addEventListener('click', function () {
  let getMov = document.querySelectorAll('.movements__value');

  const movementsUI = Array.from(getMov, el =>
    parseInt(el.textContent.replace('€', ' '))
  );
  console.log(movementsUI);
});
*/
//////////////////(challenge)
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alicle', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1.
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
// 2.
dogs.forEach(dog => {
  if (dog.owners.includes('Sarah')) {
    console.log(dog.curFood > dog.recommendedFood ? 'too much' : 'little');
  }
});
// 3.
let ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
let ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);
// console.log('#'.repeat(10));
// console.log(ownersEatTooLittle);
//4.
console.log(ownersEatTooMuch.join(' and ') + "'s dogs eat too much!");
console.log(ownersEatTooLittle.join(' and ') + "'s dogs eat too little!");
// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
// 6.
let okey = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(okey));
//7.
console.log(dogs.filter(okey));
//8.
let shallow = dogs
  .slice()
  // .map(dog => dog.recommendedFood)
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(shallow);

console.log(dogs);
