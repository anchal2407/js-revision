const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //to prevent submit values to go to server, not needed here
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  const remark = document.querySelector('#remark');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Enter a valid height ${height}`;
  } else if (weight === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      remark.innerHTML = 'You are Underweight!';
    } else if (bmi > 24.9) {
      remark.innerHTML = 'You are Overweight!';
    } else {
      remark.innerHTML = 'Normal Range';
    }
  }
});
