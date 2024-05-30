const arr = [200, 400, 50, 70, 80];

const total = arr.reduce((accumulator, price) => price + accumulator, 0);

console.log(total);
