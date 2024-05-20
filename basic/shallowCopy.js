const originalArray = [1, 2, [7, 9], 4];

const shallowCopy = [...originalArray];

shallowCopy[2][0] = 8;

console.log(shallowCopy);
console.log(originalArray);
