const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
addition.addEventListener('click', function(){
    result.innerText = Number(number1.value) + Number(number2.value);
    number1.value = "";
    number2.value = "";
  });

subtraction.addEventListener('click', function(){
    result.innerText = Number(number1.value) - Number(number2.value);
    number1.value = "";
    number2.value = "";
  });

multiplication.addEventListener('click', function(){
    result.innerText = Number(number1.value) * Number(number2.value);
    number1.value = "";
    number2.value = "";
  });

division.addEventListener('click', function(){
  result.innerText = Number(number1.value) / Number(number2.value);
  number1.value = "";
  number2.value = "";
});

clear.addEventListener('click', function(){
  number1.value = "";
  number2.value = "";
});
