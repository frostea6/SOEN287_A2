
function addNumbers(num) {
  let sum = num.reduce((total, num) => total + num, 0);
  return sum;
}
function findMaxNumber() {
  let max = Math.max(...arguments);
  return max;
}
function addOnlyNumbers(mixedArray) {
  let sum = mixedArray.reduce((total, element) => {
    if (!isNaN(parseFloat(element))) {
      total += parseFloat(element);
    }
    return total;
  }, 0);
  return sum;
}
function getDigits(inputString) {
  let digitArray = inputString.match(/\d+/g);
  if (digitArray) {
    return digitArray.join('');
  }
  return '';
}
function reverseString(inputString) {
  return inputString.split('').reverse().join('');
}
function getCurrentDate() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const currentDate = new Date();
  const day = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  return `${day}, ${month} ${date}, ${year}`;
}

const rA = document.getElementById("rA");
const numbersArray = [5, 12, 60, 20];
rA.textContent = "Sum of numbers: " + addNumbers(numbersArray);
const rB = document.getElementById("rB");
rB.textContent = "Max number: " + findMaxNumber(22, 4, 7, 80);
const rC = document.getElementById("rC");
const mixedArray = [4, 5, "3.0 birds", true, "birds2"];
rC.textContent = "Sum of just numbers: " + addOnlyNumbers(mixedArray);
const rD = document.getElementById("rD");
const inputString = "I l0ve to eat1 appl3s a4d man5os t6 th7 ba8 s9";
rD.textContent = "String Digits: " + getDigits(inputString);
const rE = document.getElementById("rE");
const inputStringReverse = "See you later";
rE.textContent = "Reverse string: " + reverseString(inputStringReverse);
const rF = document.getElementById("rF");
rF.textContent = "Current date: " + getCurrentDate();
