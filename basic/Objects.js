let mySym = Symbol("mySym");

const muObj = {
  name: "Ankit",
  age: 20,
  [mySym]: "qwertyu",
  greeting: function () {
    console.log(this.name);
  },
  userFullnaem: {
    fullnaem: {
      first_name: "ankit",
    },
  },
};
muObj.greeting();
// console.log(muObj.userFullname?.fullnaem.first_name);
// const myname = Symbol("name ");
// const obj1 = { name: "ankit", [myname]: "werty" };
// const obj2 = { age: 23 };

// const obj = { ...obj1, ...obj2 };

// console.log(obj1);
