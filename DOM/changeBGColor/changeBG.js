const randomColor = () => {
  let hex = "0123456789ABCDEF";
  let randomValue = "#";
  for (i = 0; i < 6; i++) {
    randomValue += hex[Math.floor(Math.random() * 16)];
  }
  return randomValue;
};
let intervalId;
const startColorChange = () => {
  if (intervalId == null) {
    intervalId = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};

const stopColorChange = () => {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startColorChange);
document.querySelector("#stop").addEventListener("click", stopColorChange);
