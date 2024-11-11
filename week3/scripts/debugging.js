/*const PI = 3.14;
const radius = 3;
let area = 0;
area = radius * radius * pi;
radius = 4;
area = radius * radius * pi;*/

let input = document.getElementById("input");
let result = document.getElementById("result");

input.addEventListener("change", () => {
  let squareCalculation = square(input.value);

  result.textContent = squareCalculation;


});

 const square = function (inputSquare) {
   return inputSquare * inputSquare;
 };

//function square(inputSquare) {
  //return inputSquare * inputSquare;
//}
