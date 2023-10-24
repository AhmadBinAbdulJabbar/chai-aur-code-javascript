# Projects related to DOM

## Project link
[Click here](https://dom-project-chaiaurcode-i37u89.stackblitz.io/1-colorChanger/index.html)


# Solution code

## Project 1

```javascript
console.log("Ahmad");
const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 

```javascript

const form = document.querySelector('form');
// this usecase will give you empty string
// const height = Number.parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = Number.parseInt(document.querySelector('#height').value);
  const weight = Number.parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // task
    let message = '';
    if (bmi < 18.6) {
      message = 'Under Weight';
    } else if (bmi > 18.6 && bmi < 24.9) {
      message = 'Normal Range';
    } else if (bmi > 24.9) {
      message = 'Overweight';
    }

    results.innerHTML = `<span>${bmi}</span><br><span>${message}</span>`;
  }
});

```