import { galleryItems } from "./gallery-items.js";
// Change code below this line
const string = galleryItems
  .map((element) => {
    return `<a class="gallery__item" href="${element.original}">
  <img
    class="gallery__image"
    src="${element.preview}"
    alt="${element.description}"
  />
</a>`;
  })
  .join("");

const wrapper = document.querySelector(".gallery");
wrapper.insertAdjacentHTML("afterbegin", string);

var lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});
