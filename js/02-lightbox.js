import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);
 
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();
   
   const isGalleryItem = event.target.classList.contains("gallery__image");
   if(!isGalleryItem) {
       return;
   }
   console.log(isGalleryItem);

   var lightbox = new SimpleLightbox('.gallery a', 
    ` <div class="modal"> 
      <img src="${event.target.dataset.source}" alt="Big Pictures" width= "800" height= "600"/>
      </div> `,
    {
        onShow: (lightbox) => {
        galleryContainer.addEventListener("keydown", onEscapeButton);
    },
       onClose: (lightbox) => {
        galleryContainer.removeEventListener("keydown", onEscapeButton);
},
}
   
);
lightbox.show();

function onEscapeButton(evt) {
    if(evt.key === "Escape") {
        lightbox.close();
    }
    }

   onGalleryContainerClick(isGalleryItem);
}







function createImageMarkup(images) {
    return images.map(({ preview , original , description }) => {
        return `
        <a class="gallery__item" href="${preview}">
       <img class="gallery__image" src="${original}"
        alt="${description}" />
    </a >
        `;
    }).
    join("");
  
}