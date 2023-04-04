"strict mode";
"use strict";
// function moh(){
//     console.log(`fuck you sara`);
// }
// moh();
// function fuck(man,woman) {
//     const hill =`${man} fuck ${woman} in the end`
//     return hill;
// }
// const fuck1= fuck(1,1);
// console.log(fuck1);
//                   // function declaration
// function calcage1(birthyear) {
//     return 2022-birthyear ;
// }
// const age1 =  calcage1(2003);
//                   //functuon expressions
// const calcage2 = function (birthyear){
//     return 2022-birthyear;
// }
// const age2= calcage2(2003);
// console.log(age1,age2);
//                          // arrow function
// const calcage3 = birthyear => 2022 - birthyear;
// const age3 = calcage3(2003);
// console.log (age3)

// const yearsUntlretir= (birthyear,namep)=>{
//     const age = 2022 - birthyear;
//     const retirement = 65-age;
//     //return retirement;
//     return `${namep} retires in ${retirement}`
// }
// console.log(yearsUntlretir(2003,'mohamed'))
//
// function cutfruitPieces(fruit){
//     return fruit * 4 ;
// }
// function fruitProcessor(apples, oranges){
//     const applesP = cutfruitPieces(apples);
//     const orangesP = cutfruitPieces(oranges);
//     const juice= `juice with ${applesP} apples and ${orangesP} oranges `;
// return juice;
// }
// console.log(fruitProcessor(1,3))
//               // challenge 1
// const calcAverage = (score1,score2,score3)=> {return (score1+score2+score3)/3;}
//     const avgDolhins = calcAverage(44,23,71)
//     const avgkolas = calcAverage(65,54,49)
//     console.log(`${avgDolhins}  ${avgkolas}`)
// function checkWinner(avgDolhins,avgkolas){
//     if(avgDolhins >= 2*avgkolas){
//         console.log(`Dolhins winner score ${avgDolhins} vs ${avgkolas} `)
//     }else if(avgkolas >=2*avgDolhins){
//         console.log(`kolas winner score ${avgkolas} vs ${avgDolhins}`)
//     } else{
//         console.log("no winner draws")
//     }
// }
// checkWinner(avgDolhins,avgkolas);
// checkWinner(124,55);
//     //arrys
// const friends= ['mohamed','3azizo','yossef'];
// console.log('all arry')
// console.log(friends);
// const fuck = new Array(12,55,45,48);
// console.log(fuck);
// console.log(fuck.length);

// console.log("yossef => adel")
// friends[2] = 'adel';
// console.log(friends)

// // add element
// console.log("add amad in last")
// friends.push('amad')
// console.log(friends)

// console.log("add ahmed in frist")
// friends.unshift('ahmed');
// console.log(friends)

// // remove elemet
// console.log('remove last element')
// friends.pop(); // last element
// console.log(friends)

// console.log("remove first element")
// friends.shift();//first
// console.log(friends)
// // INDEX
// console.log(friends.indexOf('3azizo'));
// console.log(friends.indexOf("FUCK"))
// console.log(friends.includes("3azizo"))
// console.log(friends.includes("FUCK"))
//           //Challenge
// const bills=[125,555,44] ;
//  function calcTip(bills){
//       if(bills>=50 && bills<=300){
//           return bills *.15
//       }else{
//            return bills*.2
//       }
//  }
//  const tip=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
//  const total=[(tip[0]+bills[0]),(tip[1]+bills[1]),(tip[2]+bills[2])]
// console.log(`tip = ${tip}     total = ${total}`)
// const calcTip = function (bill){
//      return bill>= 50 && bill<=300 ? bill*.15:bill*.2
// }
// const bills= [125,555,44];
// const tip = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const total=[(tip[0]+bills[0]),(tip[1]+bills[1]),(tip[2]+bills[2])];
// console.log(bills,tip, total )

//            //object
const live = {
  name: "mohamed",
  sirName: "3azizo",
  job: ["wed developer", "games", "video editer"],
};
console.log(live);
console.log(live.name);
console.log(live["name"]);

const sirKey = "sir";
console.log(live[sirKey + "Name"]);
live.hobbiy = "photo";
live["lastName"] = "reda";
console.log(live);
//          //loop

for (let h = 1; h <= 5; h++) {
  console.log("fuckkkkkkkk");
}
let ki = 1;
while (ki == 1) {
  console.log("3azizo");
}
