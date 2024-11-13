import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function generateMarkup(images) {
    return images
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads })  => {
        
        return `
        <li class="photo-card">
    <a href="${largeImageURL}">
    <img class="photo-card-img"
    src="${webformatURL}"
    alt="${tags}"
    />
</a>
<div class="info">
        <p class="info-item">
            <span>Likes</span>
            ${likes}
        </p>
        <p class="info-item">
            <span>Views</span>
            ${views}
        </p>
        <p class="info-item">
            <span>Comments</span>
            ${likes}
        </p>
        <p class="info-item">
            <span>Downloads</span>
            ${downloads}
        </p>
    </div>
</li>
`;             
        })
    .join("");
}


function renderImagesingallery(galleryMarkup, container) {
    container.insertAdjacentHTML('beforeend', galleryMarkup);
    let gallery = new SimpleLightbox('.gallery a', {
            caption: true,
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
    });

    gallery.refresh()
    gallery.on('show.simplelightbox');
}


export {generateMarkup, renderImagesingallery};