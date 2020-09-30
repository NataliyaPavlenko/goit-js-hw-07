/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.*/

/* Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid. */

const validationInputRef = document.getElementById("validation-input");
validationInputRef.addEventListener("focus", onValidationLengthAdd);
validationInputRef.addEventListener("blur", onValidationLengthAdd);

function onValidationLengthRemove() {
  validationInputRef.classList.remove("valid");
  validationInputRef.classList.remove("invalid");
}

function onValidationLengthAdd() {
  validationInputRef.value.length ===
  +validationInputRef.getAttribute("data-length")
    ? validationInputRef.classList.add("valid")
    : validationInputRef.classList.add("invalid");
}
