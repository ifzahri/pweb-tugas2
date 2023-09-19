let select = "+";

function setOperator(operator) {
  select = operator;
  document.querySelector(".operator-btn.selected").classList.remove("selected");
  document
    .querySelector(`button[data-operator="${operator}"]`)
    .classList.add("selected");
}

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  switch (select) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Tidak bisa dibagi dengan 0";
      }
      break;
    default:
      result = "Invalid";
  }

  document.getElementById("hasil").textContent = result;
}
