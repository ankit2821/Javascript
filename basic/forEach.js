const arr = ["Ankit", "Nehal", "Pratik", "Shubham", "mrunal", "rudhi"];

// ++++++++++++++          with normal function            +++++++++++++++++++++
// arr.forEach(function (name) {
//   console.log(name);
// });

// +++++++++++++   with arrow function         +++++++++++++++
// arr.forEach((name) => {
//   console.log(name);
// });

// +++++++++++++  by definig the callback function outside the loop          +++++++++++

// const printName = (name) => {
//   console.log(name);
// };

// arr.forEach(printName);

// with multiple objects i.e array of objects               +++++++++++++++++

const myArray = [
  {
    name: "ankit",
    age: 22,
  },
  {
    name: "Nehal",
    age: 21,
  },
  {
    name: "Rudhi",
    age: 23,
  },
  {
    name: "mrunal",
    age: 24,
  },
];

myArray.forEach((member) => {
  console.log(member.name);
});
