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


## Project 3

```javascript
const clock = document.getElementById('clock');

// const clock = document.querySelector('clock');

setInterval(function () {
  let date = new Date();
  clock.innerText = date.toLocaleTimeString();
}, 1000);

```

## Project 4

```javascript
// random number generator
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGames = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// user entered values is valid or not also if it is in between 0 to 100
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGames.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// checking value is equal to, less than or greater than random number
function checkGuess(guess) {
  if (randomNumber === guess) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

// it will display current and previous guess
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// it will print display message lower high
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// end
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame"> Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// restart
function newGame() {
  let newGameButton = document.getElementById('newGame');
  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGames = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    guessSlot.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    lowOrHi.innerHTML = '';
    playGame = true;
  });
}

```

## Project 5

```javascript
const insert = document.querySelector('#insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `<div class = 'color'>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Key</th>
      <th scope="col">Keycode</th>
      <th scope="col">code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </tbody>
</table>
</div>`;
});

```

##Project 6
```javascript

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

// random color generator function
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);

```
