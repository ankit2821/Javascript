// let mySym = Symbol("mySym");

// const muObj = {
//   name: "Ankit",
//   age: 20,
//   [mySym]: "qwertyu",
//   greeting: function () {
//     console.log("Hi Ankit");
//   },
//   userFullnaem: {
//     fullnaem: {
//       first_name: "AnkitPs",
//     },
//   },
// };

// console.log(muObj.userFullname?.fullnaem.first_name);

const obj1 = { name: "ankit" };
const obj2 = { age: 23 };

const obj = { ...obj1, ...obj2 };

console.log(obj);
