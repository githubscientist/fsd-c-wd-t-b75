// external js
let firstInput = document.getElementById('firstInput');
let secondInput = document.getElementsByClassName('secondInput');
let result = document.getElementById('result');

function calculateSum() {
    let sum = parseInt(firstInput.value) + parseInt(secondInput[0].value);
    result.value = sum;
}