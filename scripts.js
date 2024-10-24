const buttonElements = document.querySelectorAll("[data-number]");
const displayElement = document.querySelector("[data-display]");
const operationsButtonsElements = document.querySelectorAll("[data-operation]");
const allClearElement = document.querySelector("[data-all-clear]");
const equalButtonElement = document.querySelector("[data-equals]");
const deleteButtonElement = document.querySelector("[data-delete]");
let previousButton;

buttonElements.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (previousButton === "equals") {
      displayElement.innerHTML = "";
    }
    const clickedNumber = event.target.innerHTML;
    displayElement.innerHTML = displayElement.innerHTML + clickedNumber;
    previousButton = "number";
  });
});

allClearElement.addEventListener("click", () => {
  displayElement.innerHTML = "";
  previousButton = undefined;
});

operationsButtonsElements.forEach((operation) => {
  operation.addEventListener("click", (event) => {
    const clickedOperation = event.target.innerHTML;
    if (previousButton !== "operation" && previousButton) {
      displayElement.innerHTML = displayElement.innerHTML + clickedOperation;
      previousButton = "operation";
    }
  });
});

equalButtonElement.addEventListener("click", () => {
  previousButton = "equals";
  const fixedExspression = displayElement.innerHTML.replaceAll("÷", "/");
  if (fixedExspression === "") return;
  try {
    displayElement.innerHTML = eval(fixedExspression);
  } catch {
    displayElement.innerHTML = "ERROR";
  }
});

deleteButtonElement.addEventListener("click", () => {
  displayElement.innerHTML = displayElement.innerHTML.slice(0, -1);
});
