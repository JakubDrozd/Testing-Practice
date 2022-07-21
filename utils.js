export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const reverseString = (string) => {
  string = string.split("");
  string = string.reverse();
  string = string.join("");
  return string;
};

export const caesarCipher = (string, key) => {
  if (key < 0) {
    return "Key is invalid";
  }
  let letters = string.split("");
  let newString = "";
  letters.forEach((letter) => {
    newString += cipherLetter(letter, key);
  });
  return newString;
};

const cipherLetter = (ch, key) => {
  ch = ch.toUpperCase();
  if (ch.charCodeAt(0) < 65 || ch.charCodeAt(0) > 90) {
    return ch;
  } else {
    ch = ch.charCodeAt(0) - 64;
    ch = (ch + key) % 26;
    ch = ch + 64;
  }
  return String.fromCharCode(ch).toLowerCase().toString();
};

export const analyzeArray = (array) => {
  array = array.sort((a, b) => a - b);
  let arrayMin = array[0];
  let arrayMax = array[array.length - 1];
  let length = array.length;
  let sum = array.reduce((sum, item) => sum + item, 0);
  let average = sum / array.length;
  let object = {
    average: average,
    min: arrayMin,
    max: arrayMax,
    length: length,
  };
  return object;
};
