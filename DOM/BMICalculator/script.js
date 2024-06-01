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
    // console.log(bmi);
    if (bmi < 18.6) {
      result.innerHTML = `<span>Your BMI is ${bmi} which is under weight</span>`;
      //   console.log("for under weigtt: ", result.innerHTML);
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>Your BMI is ${bmi} which is normal weight</span>`;
      //   console.log("for normal weigtt: ", result.innerHTML);
    } else {
      result.innerHTML = `<span>Your BMI is ${bmi} which is over weight</span>`;
      //   console.log("for over weigtt: ", result.innerHTML);
    }
  }
});
