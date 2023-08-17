
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';


const refs = { galleryList: document.querySelector(".gallery")};

 const galleryMarcup = galleryItems.map(({preview,original,description}) =>{ 

 return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
 </li>`
 }).join("")

 refs.galleryList.insertAdjacentHTML("beforeend", galleryMarcup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});