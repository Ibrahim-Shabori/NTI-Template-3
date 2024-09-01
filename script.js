const pricingMonthBtn = document.querySelector(".pricing-month-btn");
const pricingYearBtn = document.querySelector(".pricing-year-btn");
const pricingGroup1 = document.querySelector(".group-1");
const pricingGroup2 = document.querySelector(".group-2");

pricingMonthBtn.addEventListener("click", () => {
  pricingMonthBtn.classList.remove("bg-white");
  pricingMonthBtn.classList.remove("text-primary");
  pricingYearBtn.classList.add("bg-white");
  pricingYearBtn.classList.add("text-primary");

  pricingGroup1.classList.remove("d-none");
  pricingGroup2.classList.add("d-none");
});

pricingYearBtn.addEventListener("click", () => {
  pricingMonthBtn.classList.add("bg-white");
  pricingMonthBtn.classList.add("text-primary");
  pricingYearBtn.classList.remove("bg-white");
  pricingYearBtn.classList.remove("text-primary");
  pricingGroup1.classList.add("d-none");
  pricingGroup2.classList.remove("d-none");
});

// let a = 1_00,
//   b = 2_00.5,
//   c = 1e2,
//   d = 2.4;

// console.log(parseInt(Math.min(a, b, c, d))); // Smallest
// console.log(Math.pow(a, parseInt(d))); // 10000
// console.log(Math.trunc(d), Math.floor(d), parseInt(d), d.toFixed(0)); // 2 2 2 2

// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2).toString()); //66.67

// console.log((Math.floor(b) / Math.ceil(d)).toFixed(0)); //67

// const pricingBtnsParent = document.querySelector(".pricing-btns-parent");

// pricingBtnsParent.addEventListener("click", (e) => {
//   const ele = e.target;
//   if (ele.nodeName == "BUTTON"){

//   }
// });

// let str = "hello from javascript";

// //includes slice & charAt to get from
// console.log(str.slice(6, 10));

// //8 S
// console.log(str.charAt(15).toUpperCase().repeat(8));

// //return array ['hello']
// console.log(str.slice(0, 5).split(" "));

// //use only substr  to get hello script
// console.log(str.substring(0, 6) + str.substring(15, 21));

// //solution must be dynamic and string may change make the first and last letter capital and any letter in tha half small
// console.log(
//   str[0].toUpperCase() +
//     str.substring(1, str.length - 1) +
//     str[str.length - 1].toUpperCase()
// );

// //task 1
// let a = 10;
// //<10    10:40    >40   make it in ternery operator
// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 to 40");
// } else if (a > 40) {
//   console.log(">40");
// } else {
//   console.log("unknown");
// }

// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 to 40")
//   : a > 40
//   ? console.log(">40")
//   : console.log("unknown");

// let st = "Your JavaScript";
// // task 2
// if ((st.length * 2).toString() === "30") {
//   console.log("30");
// }

// // //task3
// if (st.split(" ")[1][0] === "J") {
//   console.log("J");
// }
// // //task 4
// if (typeof st == "string") {
//   console.log("string");
// }
// // //task 5
// if (typeof st.length === "number") {
//   console.log("number");
// }
// // //task 6
// if (st.split(" ")[0].repeat(2) === "YourYour") {
//   console.log("your your");
// }
// //task7
// var degree = 65;
// // degree>50 -->fail , 50<degree>70 -> good  degree > 70 ->excellent
// if (degree < 50) {
//   console.log("fail");
// } else if (degree > 50 && degree < 70) {
//   console.log("good");
// } else {
//   console.log("excellent");
// }
// swicth challange
// let job = "Manager";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     break;
//   default:
//     salary = 4000;
// }

// console.log(salary);

// //if challenge
// let holidays = 0;
// let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

// if (holidays == 0) {
//   money = 5000;
//   console.log(`My Money is ${money}`);
// } else if (holidays == 1 || holidays == 2) {
//   money = 3000;
//   console.log(`My Money is ${money}`);
// } else if (holidays == 3) {
//   money = 2000;
//   console.log(`My Money is ${money}`);
// } else if (holidays == 4) {
//   money = 1000;
//   console.log(`My Money is ${money}`);
// } else {
//   money = 0;
//   console.log(`My Money is ${money}`);
// }

// //task #1
// let myFriends = ["Sara", "Soha", "Ahmed", "Ali"];
// // ['Sara', 'Soha', 'Ahmed']
// myFriends.pop();
// console.log(myFriends);

// //task #2
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];
// // Write One Single Line Of Code
// // ["Z", "X", "D", "C", "B", "A"]

// finalArr = arrOne.concat(arrTwo).sort().reverse();
// console.log(finalArr);

// //task 3
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];
// allArrs = arr1.slice(2, arr1.length).concat(arr2.slice(2, arr2.length));
// allArrs = allArrs.sort().join("").toLowerCase();

// console.log(allArrs); // fxy

// //----------------------// ++ --
// let Zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Maryan", "Elham", "Osama", "Gamal", "Ameer"];

// //task #1
// console.log(my.slice(Zero++, ++counter).reverse());
// // ["Osama", "Elham", "Maryan", "Ahmed"];

// //task #2
// console.log(my.slice(Zero--, --counter).reverse());
// // ["Elham", "Maryan"]

// //task #3
// console.log(
//   my[--counter].slice(Zero, counter--) + my[counter].slice(++counter)
// );
// // "Elryan"

// //task #4
// console.log(
//   my[--counter].slice(counter, ++counter) +
//     my[--counter].slice(-counter).toUpperCase()
// );
// // "aN"

// #task 1
// create function that take fName ,mName and lName and return  fullName in a variable
function getFullName(fName, mName, lName) {
  let fullName = `${fName} ${mName} ${lName}`;
  return fullName;
}
// Ex:
let fN = "Ibrahim",
  mN = "M.",
  lN = "Ahmed";
let fullN = getFullName(fN, mN, lN);
console.log(fullN);

// #task 2
// create function that take the name of array and print all data in it
function printArrayElements(arr) {
  for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }
}
let arr1 = [1, true, "Ali", 13.5];
printArrayElements(arr1);

// #task 3
// create function to make looing in some of numbers and take from you the firstNum ,endNum ,continueNum ,breakNum

function loopOnMyRange(fNum, lNum, contNum, breakNum) {
  if (lNum < fNum) {
    console.log("Last Numbeer Should Be Greater Than First Number");
    return;
  }

  for (let i = fNum; i < lNum + 1; ++i) {
    if (i === contNum) continue;
    console.log(i);
    if (i === breakNum) break;
  }
}

loopOnMyRange(2, 7, 3, 6);
