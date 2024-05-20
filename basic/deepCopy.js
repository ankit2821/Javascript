const originalArray = ["Ankit", "Dhoni", { team: "CSK" }];

const deepCopy = JSON.parse(JSON.stringify(originalArray));
// const shallowCopy = [...originalArray];

deepCopy[2].team = "MI";

console.log(originalArray);
console.log(deepCopy);
// console.log(shallowCopy);
