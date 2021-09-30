// document.getElementById("firstPlusBtn").addEventListener("click", function () {
//   // const firstPlusInput = document.getElementById("firstInput");
//   // const inputNumber = parseInt(firstPlusInput.value);
//   // console.log(inputNumber);
//   // const newPlusNumber = inputNumber + 1;
//   // firstInput.value = newPlusNumber;
//   // const numberIncrease = newPlusNumber * 150;
//   // console.log(numberIncrease);
// });
// document.getElementById("firstMinusBtn").addEventListener("click", function () {
//   // const firstMinusInput = document.getElementById("firstInput");
//   // const inputNumber = parseInt(firstMinusInput.value);
//   // const newMinusNumber = inputNumber - 1;
//   // firstInput.value = newMinusNumber;
//   // const numberDecrease = newMinusNumber * 150;
//   // console.log(numberDecrease);

// });
function firstClass(isIncrease) {
  const inputValue = document.getElementById("firstInput");
  let inputNumber = parseInt(inputValue.value);
  if (isIncrease == true) {
    inputNumber = inputNumber + 1;
  } else {
    inputNumber = inputNumber - 1;
  }
  inputValue.value = inputNumber;
  const total = inputValue.value * 150;
}

