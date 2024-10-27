var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const compare = document.querySelector("#compare");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    var bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `${bmi}`;
  }
  if (bmi < 18.8) {
    compare.innerHTML = `it is underweight...`;
  } else if (bmi > 18.8 && bmi < 24.6) {
    compare.innerHTML = `it is in Normal range...`;
  } else {
    compare.innerHTML = `it is overweight`;
  }
});
