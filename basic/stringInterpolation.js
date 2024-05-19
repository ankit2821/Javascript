let arr = ["a", "b", "c"];
let new_str = "";
for (let i = 0; i <= arr.length - 1; i++) {
  for (let j = i; j <= i; j++) {
    new_str += arr[j];
  }
}
console.log(new_str, typeof new_str);
let SI_str = `${arr}`;
console.log(typeof SI_str);
console.log(arr.toString());
