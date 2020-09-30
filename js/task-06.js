/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.*/

/* Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid. */

const validationInputRef = document.querySelector("#validation-input");

function validationInput() {
  if (validationInputRef.value.length === +validationInputRef.dataset.length) {
    validationInputRef.classList.remove("invalid");
    validationInputRef.classList.add("valid");
  } else {
    validationInputRef.classList.add("invalid");
  }
}

input.addEventListener("blur", validationInput);
