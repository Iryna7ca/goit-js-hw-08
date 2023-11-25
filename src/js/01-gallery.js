// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
 
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
 
 
 
const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

 gallery.addEventListener('click', onGalleryItemClick);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
     <li class="gallery__item">
     <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
       />
     </a>
     </li>
     `;
    })
        .join("");
      
}
  
function onGalleryItemClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    console.log(event.target.dataset.source);
    const originalSrc = event.target.dataset.source;
     const instance = basicLightbox.create(`
    <img src="${originalSrc}" width="800" height="600">
`)

    instance.show();
      
 
}
