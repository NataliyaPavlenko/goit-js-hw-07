/* Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

< ul id = "gallery" ></ >

    Используй массив объектов images для создания тегов img вложенных в li.
    Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css - классы. */

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createGalleryItem = (image) => {
  const itemList = document.createElement("li");
  itemList.classList.add("item_list");

  const imageRef = document.createElement("img");
  imageRef.classList.add("gallery_image");
  imageRef.src = image.url;
  imageRef.alt = image.alt;

  itemList.appendChild(imageRef);
  return itemList;
};

const imagesList = images.map((image) => createGalleryItem(image));

document.querySelector("#gallery").append(...imagesList);
