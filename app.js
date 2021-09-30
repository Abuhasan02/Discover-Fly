
document.getElementById("firstPlusBtn").addEventListener("click", function () {
  const firstInput = document.getElementById("first-input").value;
  let firstClassNumber = parseInt(firstInput);
  //console.log(newFirstInput);
  firstClassNumber++;
  console.log(firstClassNumber);
});
