/* Напиши скрипт, который при наборе текста в инпуте input#name - input(событие input),
подставляет его текущее значение в span#name - output.
Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */

const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

const addUserName = (event) =>
  (spanName.textContent =
    inputName.value.length > 0 ? event.target.value : "незнакомец");

inputName.addEventListener("input", addUserName);
