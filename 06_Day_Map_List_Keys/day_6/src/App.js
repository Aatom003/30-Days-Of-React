// Day 6 Level 2 Question 1
// import React from "react";
// let numbers = [];

// let Numbers = () => {
//   const isPrime = (num) => {
//     for (let i = 2; i < num; i++) if (num % i === 0) return false;
//     return num > 1;
//   };
//   const isOdd = (num) => {
//     return num % 2;
//   };
//   const getBackGroundColor = (num) => {
//     let color = "orange";
//     if (isOdd(num)) color = "orange";
//     //even
//     else color = "green"; //odd
//     if (isPrime(num)) color = "red"; //prime
//     return color;
//   };

//   const list = numbers.map((number) => (
//     <button
//       key={number}
//       style={{
//         backgroundColor: getBackGroundColor(number),
//         margin: "5px",
//         height: "100px",
//         width: "100px",
//         fontFamily: "Arial",
//       }}
//       class="flex-container "
//     >
//       <div className="list">{number}</div>
//     </button>
//   ));
//   return list;
// };

// for (let i = 0; i < 30; i++) {
//   numbers.push(i);
// }
// // let i = 0;
// // while (i <= 31) {
// //   numbers.push(i);
// //   i += 1;
// // }

// export default Numbers;

// Day 6 Level 2 Question 2 Start Here
import React from "react";

let numbers = [];
const getBackGroundColor = (num) => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

let Numbers = () => {
  const list = numbers.map((num) => (
    <button
      key={num}
      style={{
        backgroundColor: getBackGroundColor(num),
        margin: "5px",
        height: "100px",
        width: "100px",
        fontFamily: "Arial",
        borderRadius: "7px",
        color: "White",
      }}
      class="flex-container "
    >
      <div className="list">{num}</div>
    </button>
  ));
  return list;
};

for (let j = 0; j < 30; j++) {
  let a = getBackGroundColor();
  numbers.push(a);
}
// let i = 0;
// while (i <= 31) {
//   numbers.push(i);
//   i += 1;
// }

export default Numbers;
