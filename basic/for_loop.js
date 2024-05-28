// for (let i = 0; i < 5; i++) {
//   let box = "";
//   for (let j = 0; j <= i; j++) {
//     box += "+";
//   }
//   console.log(box);
// }

// let i = 0;
// while (i < 5) {
//   console.log(i, "*");
//   i++;
// }

// let i = 0;
// do {
//   console.log("#");
//   i++;
// } while (i < 5);

let arr = [1, 3, 5, 4, 6, 6, 7, 9];
let obj = {
  name: "Ankit",
  age: 22,
  mob: 789461215,
};

// for arraya--------------------------------------
for (i in arr) {
  //   console.log(arr[i]);
}

for (i of arr) {
  //   console.log(i);
}
// ----------------------------------------
// for objects++++++++++++++++++++++++++++++++++

for (keys in obj) {
  //   console.log(obj[keys]);
}

// this is not posibble
for (keys of obj) {
  //   console.log(obj[keys]);
}
