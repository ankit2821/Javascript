const a = 1;
let b = 2;
var c = 3;

if (true) {
  const a = 10;
  let b = 20;
  var c = 30;
  console.log(` Inside loop : a=${a},b=${b}, c=${c}`);
}

console.log(`a=${a},b=${b}, c=${c}`);
