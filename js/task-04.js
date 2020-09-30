/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.

Создай функции increment и decrement для увеличения и уменьшения значения счетчика.

Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */

const counterValue = document.querySelector("#value");

const counterValueDec = document.querySelector(
  'button[data-action="decrement"]'
);
const counterValueInc = document.querySelector(
  'button[data-action="increment"]'
);

function decrement(event) {
  --counterValue.textContent;
}

function increment(event) {
  ++counterValue.textContent;
}

counterValueDec.addEventListener("click", decrement);
counterValueInc.addEventListener("click", increment);
