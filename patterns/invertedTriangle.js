let n = 5;
for (let i = 1; i <= n; i++) {
  let box = "";
  for (let j = 1; j <= n; j++) {
    if (j >= i) {
      box += "*";
    }
    box += " ";
  }
  console.log(box);
}
