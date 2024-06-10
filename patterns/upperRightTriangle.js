let n = 6;
for (let i = 1; i < n; i++) {
  let box = "";
  for (let j = 1; j < n; j++) {
    if (n - j > i) {
      box += "  ";
    } else {
      box += "* ";
    }
  }
  console.log(box);
}
