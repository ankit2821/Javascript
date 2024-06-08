new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Promise created!!");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise consumed!!");
});
