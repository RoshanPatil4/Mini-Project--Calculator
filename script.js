function appendValue(value) {
  const resultField = document.getElementById("result");
  resultField.value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  const resultField = document.getElementById("result");
  resultField.value = resultField.value.slice(0, -1);
}

function calculate() {
  const resultField = document.getElementById("result");
  try {
    resultField.value = eval(resultField.value) || "";
  } catch (error) {
    alert("Invalid expression");
    resultField.value = "";
  }
}
