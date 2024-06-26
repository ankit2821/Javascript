const Fibonacci = (n) => {
  const start = [0, 1];
  //   const sequence = [0];
  for (let i = 2; i < n; i++) {
    start.push(start[i - 2] + start[i - 1]);
  }
  return start;
};

console.log(Fibonacci(7));
console.log(Fibonacci(3));
console.log(Fibonacci(2));

//time complexity= O(n)
