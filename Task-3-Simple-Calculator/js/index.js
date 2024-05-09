function load() {
  var btns = document.querySelectorAll("#calculator span");
  var operators = ["+", "-", "*", "/"]; 
  var inputScreen = document.querySelector("#screen");
  var btnValue;
  var input;

  // Function to handle click event on calculator buttons
  function handleButtonClick(btn) {
    btnValue = btn.innerHTML;
    input = inputScreen.innerHTML;
    performAction(btnValue);
  }

  // Event listeners for calculator buttons
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      handleButtonClick(this);
    });
  }

  // Function to handle keyboard input
  document.addEventListener('keydown', function(event) {
    var keyValue = event.key;
    if (keyValue === 'Delete') { // Clear key
      inputScreen.innerHTML = "";
    } else if (keyValue === 'Backspace') { // Backspace key
      inputScreen.innerHTML = inputScreen.innerHTML.slice(0, -1);
    } else if (keyValue === 'Enter') { // Enter key
      calculateResult();
    } else if (!isNaN(parseInt(keyValue)) || keyValue === '.' || keyValue === '=') { // Number keys, decimal point, and equal sign
      performAction(keyValue);
    } else if (operators.includes(keyValue)) { // Operator keys
      handleOperatorKeyPress(keyValue);
    }
  });

  // Function to perform calculator action based on input
  function performAction(value) {
    switch (value) {
      case "C":
        inputScreen.innerHTML = "";
        break;
      case "=":
        calculateResult();
        break;
      case ".":
        addDecimalPoint();
        break;
      default:
        inputScreen.innerHTML += value;
        break;
    }
  }

  // Function to handle operator key presses
  function handleOperatorKeyPress(operator) {
    var lastChar = inputScreen.innerHTML[inputScreen.innerHTML.length - 1];
    if (operators.includes(lastChar)) {
      inputScreen.innerHTML = inputScreen.innerHTML.slice(0, -1) + operator;
    } else {
      inputScreen.innerHTML += operator;
    }
  }

  // Function to calculate the result
  function calculateResult() {
    var expression = inputScreen.innerHTML.replace(/x/g, "*").replace(/÷/g, "/");
    if (expression) {
      inputScreen.innerHTML = eval(expression);
    }
  }

  // Function to add decimal point
  function addDecimalPoint() {
    var lastChar = inputScreen.innerHTML[inputScreen.innerHTML.length - 1];
    if (lastChar !== '.' && !operators.includes(lastChar)) {
      inputScreen.innerHTML += '.';
    }
  }
}

// Trigger load function on page load
window.onload = load;
