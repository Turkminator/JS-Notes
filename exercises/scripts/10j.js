let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  localStorage('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;
}