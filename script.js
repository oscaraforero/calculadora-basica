// creando una función (btnOnClick) que se llama desde el HTML
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick() {
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}

// con addEventListener, click sin afectar el HTML
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const btn2 = document.querySelector('#btnCalcular2');
const pResult2 = document.querySelector('#result2');

btn2.addEventListener('click', btnOnClick1);

function btnOnClick1() {
    const restaInputs = Number(input3.value) - Number(input4.value);
    pResult2.innerText = "Resultado: " + restaInputs;
}

//utilizando la etiqueta form en el HTML y event en js para anular submit
const form = document.querySelector('#form');
const input5 = document.querySelector('#calculo5');
const input6 = document.querySelector('#calculo6');
const btn3 = document.querySelector('#btnCalcular3');
const pResult3 = document.querySelector('#result3');

form.addEventListener('submit', multiplicarInputValues);

function multiplicarInputValues(event) {
    event.preventDefault();// se usa para que la página no se recargue (submit)
    const multiplicarInputs = Number(input5.value) * Number(input6.value);
    pResult3.innerText = "Resultado: " + multiplicarInputs;
}

// utilizando la etiqueta form en el HTML y addEventListener, click
const input7 = document.querySelector('#calculo7');
const input8 = document.querySelector('#calculo8');
const btn4 = document.querySelector('#btnCalcular4');
const pResult4 = document.querySelector('#result4');

btn4.addEventListener('click', dividirInputValues);

function dividirInputValues() {
    const dividirInputs = Number(input7.value) / Number(input8.value);
    pResult4.innerText = "Resultado: " + dividirInputs;
}