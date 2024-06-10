let n = 0;
for (let i = 5; i >= n; i--) {
  let box = "";
  for (let j = 1; j <= i; j++) {
    if (j == i || j == 1 || i == 5) {
      box += "* ";
    } else {
      box += "  ";
    }
  }
  console.log(box);
}
