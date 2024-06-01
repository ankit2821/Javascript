const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  //   console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  //   console.log(weight);
  //   const result = [weight / height / height] * 10000;
  const result = document.querySelector("#result");
  if (height === 0 || height < 0 || isNaN(height)) {
    result.innerHTML("Please enter a valid height.");
  } else if (weight === 0 || weight < 0 || isNaN(weight)) {
    result.innerHTML("Please enter a valid weight value.");
  } else {
    const bmi = ((weight / (height * height)) * 10000).toFixed(2);
    result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  }
});
