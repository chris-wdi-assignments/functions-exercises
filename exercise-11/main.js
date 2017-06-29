function flip () {
  if (Math.random() > 0.5) {
    return 'heads';
  } else {
    return 'tails';
  }
}

function guess () {
  let guess = window.prompt('Please guess heads or tails: ');
  return guess.trim().toLowerCase();
}

function displayResult (string) {
  document.getElementById('result').innerHTML = string;
}

function play () {
  let input = guess();
  let coin = flip();
  if (coin === input) {
    displayResult(`You were correct! It was ${coin}`);
  } else {
    displayResult(`You were wrong. It was ${coin}`);
  }
}
