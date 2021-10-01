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
function firstClass(isIncrease,id,price) {
  const inputValue = document.getElementById(id+"-input");
  let inputNumber = parseInt(inputValue.value);
  if (isIncrease == true) {
    inputNumber = inputNumber + 1;
  } else if(isIncrease==false && inputNumber>0) {
    inputNumber = inputNumber - 1;
  }
  inputValue.value = inputNumber;
  const total = inputValue.value * price;
  // console.log(total);
  totalPrice();
}
function getInput(ticket){
  const ticketInput = document.getElementById(ticket+"-input");
  const ticketNumber = parseInt(ticketInput.value);
  return ticketNumber;
}
function totalPrice(){
  const firstClassTicket = 150 * getInput('first');
  const economyClassTicket = 100 * getInput("economy");

  const subTotalPrice = firstClassTicket + economyClassTicket;
  const taxCount = subTotalPrice * 0.1;
  const totalPrice = subTotalPrice + taxCount;
  
  document.getElementById("sub-total").innerText = '$'+subTotalPrice;
  document.getElementById("tax-count").innerText = "$" + taxCount;
  document.getElementById("total-price").innerText = "$" + totalPrice;
  // bookNow(10);
  }
  document.getElementById("bookNow").addEventListener('click',function(){
     const firstClassTicket = 150 * getInput("first");
     const economyClassTicket = 100 * getInput("economy");

     const subTotalPrice = firstClassTicket + economyClassTicket;
     const taxCount = subTotalPrice * 0.1;
     const totalPrice = subTotalPrice + taxCount;
     bookNow(subTotalPrice, taxCount, totalPrice);
  });
  function bookNow(subTotal,tax,total){
    const bookBtn = document.getElementById("display");
    bookBtn.style.display = "block";
    document.getElementById("subTotal").innerText = "$" + subTotal;
    document.getElementById("taxCount").innerText = "$" + tax;
    document.getElementById("totalPrice").innerText = "$" + total;
  }
