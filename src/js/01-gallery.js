// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const containerEl = document.querySelector('.gallery');
function markupGalery(arr) {
  return arr
    .map(
      ({ preview, original, description }) => ` <li class="gallery__item" >
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    )
    .join('');
}
let instAb = 0;
containerEl.insertAdjacentHTML('afterbegin', markupGalery(galleryItems));
const galery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
