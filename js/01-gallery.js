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
       return
   }
   console.log(isGalleryItem);

   const instance = basicLightbox.create(
    ` <div class="modal"> 
      <img src="${event.target.dataset.source}" alt="Big Pictures" width= "800" height= "600"/>
      </div> `,
    {
        onShow: (instance) => {
        galleryContainer.addEventListener("keydown", onEscapeButton);
    },
       onClose: (instance) => {
        galleryContainer.removeEventListener("keydown", onEscapeButton);
},
}
);
instance.show();

function onEscapeButton(evt) {
    if(evt.key === "Escape") {
        instance.close();
    }
    }

  //  onGalleryContainerClick(isGalleryItem);
}


function createImageMarkup(images) {
    return images.map(({ preview , original , description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        </div>
        `;
    }).
    join("");
  
}





