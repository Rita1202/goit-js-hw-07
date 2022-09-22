import { galleryItems } from "./gallery-items.js";

const string = galleryItems
  .map((element) => {
    return `<div class="gallery__item">
  <a target="_self" class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
  })
  .join("");

const wrapper = document.querySelector(".gallery");
wrapper.insertAdjacentHTML("afterbegin", string);

wrapper.addEventListener("click", onImageClickHandler);

function onImageClickHandler(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    galleryItems.find((element) => {
      if (event.target.currentSrc === element.preview) {
        const instance = basicLightbox.create(`<img src=${element.original}>`, {
          onShow: () => {
            window.addEventListener("keydown", closeModalEsc);
          },
          onClose: () => {
            window.removeEventListener("keydown", closeModalEsc);
          },
        });

        instance.show();

        function closeModalEsc(event) {
          if (event.key === "Escape") {
            instance.close();
          }
        }
      }
    });
  }
}
