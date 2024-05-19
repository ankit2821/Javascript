const call_by_reference = (name) => {
  name = "Ankit";
  console.log(`Inside function: ${name}`);
};
let name = "Hey";
call_by_reference(name);
console.log("Outside functio:", name);

const call_by_value = (obj) => {
  obj.one = "Z";
  console.log(`Inside function `, obj);
};

let obj = {
  one: "A",
  two: "B",
  three: "C",
};
call_by_value(obj);
console.log(`Outside function `, obj);
