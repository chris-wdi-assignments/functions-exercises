// TODO: add your solutions here!

// 1
function concat (string1, string2) {
  return string1 + string2;
}

console.log(concat('dog', 'house'));

// 2
function repeat (phrase, n) {
  for (let i = 0; i < n; i++) {
    console.log(phrase);
  }
}

repeat('Hello', 5);

// 3 Power Function
function power (x, n) {
  let result = x;
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  return result;
}

console.log(power(4, 5)); // log 4 ^ 5

// 4 Area of Circle

function circleArea (radius) {
  return Math.PI * radius * radius;
}

console.log(circleArea(2)); //  log area of circle with radius of 2 units

// 5 Pythagorean Theorem

function pythagorean (a, b) {
  return Math.sqrt(a * a + b * b);
}

console.log(pythagorean(3, 4)); // log hypoteneus of right triangle with 3, 4 unit sides

// 6 Is X evenly divisible by Y?

function isFactor (x, y) {
  if (x % y === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(`Is 8 evenly divisible by 2? Answer: ${isFactor(8, 2)}`);

// 7 Vowel Count

function vowelCount (string) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i].toLowerCase() === vowels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}

console.log(vowelCount('stealing'));

// 8 Does the array contain "wdi"?

function hasWdi (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'wdi') {
      return true;
    }
  }
  // array does not contain "wdi" if we've reached here without returning
  return false;
}

let testArray1 = [9, 'Bart Simpson', true, 'wdi'];
let testArray2 = ['a', 'b', 'c'];

console.log(testArray1, testArray2);

// 9 Find the longest word in a sentence

function findLongestWord (sentence) {
  let longestWord = '';
  let wordArray = sentence.split(' ');

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longestWord.length) {
      longestWord = wordArray[i];
    }
  }
  return longestWord;
}

findLongestWord("The rain in Spain falls mainly on the plain");

// 10 Build an ASCII Triangle

function printTriangle(tiers) {
  let stars = '';
  for (let i = 1; i <= tiers; i++) { // start index at 1 so the first loop prints 1 star
    for (let j = 0; j < i; j++) {
      stars = stars + '*'
    }
    console.log(stars);
    stars = '';
  }
}

printTriangle(5);
