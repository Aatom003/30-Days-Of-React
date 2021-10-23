import React from "react";
let numbers = [];

let Numbers = () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };
  const isOdd = (num) => {
    return num % 2;
  };
  const getBackGroundColor = (num) => {
    let color = "orange";
    if (isOdd(num)) color = "orange";
    //even
    else color = "green"; //odd
    if (isPrime(num)) color = "red"; //prime
    return color;
  };

  const list = numbers.map((number) => (
    <button
      key={number}
      style={{
        backgroundColor: getBackGroundColor(number),
        margin: "5px",
        height: "100px",
        width: "100px",
        fontFamily: "Arial",
      }}
      class="flex-container "
    >
      <div className="list">{number}</div>
    </button>
  ));
  return list;
};

for (let i = 0; i < 30; i++) {
  numbers.push(i);
}
// let i = 0;
// while (i <= 31) {
//   numbers.push(i);
//   i += 1;
// }

export default Numbers;
