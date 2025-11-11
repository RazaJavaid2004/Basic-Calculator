const display = document.getElementById("display");
let justCalculated = false;

function appendValue(value) {
  if (justCalculated) {
    if (!isNaN(value) || value === ".") {
      // If it's a number or decimal, start fresh
      display.value = "";
    }
    // If it's an operator, keep the result and continue
    justCalculated = false;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  justCalculated = false;
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
    justCalculated = true; // mark that we just calculated
  } catch {
    display.value = "Error";
    justCalculated = true;
  }
}

// ✅ Keyboard support with fix
document.addEventListener("keydown", (event) => {
  if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    deleteLast();
  } else if (event.key.toLowerCase() === "c") {
    clearDisplay();
  }
});
