import { generateMarkup, renderImagesingallery } from "./js/render-functions";
import fetchData from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".searching-form");
const galleryContainer = document.querySelector(".gallery");
const loaderIconContainer = document.querySelector(".loader-icon-container");
const loadMore = document.querySelector(".js-load-more");
const buttonContainer = document.querySelector(".button-container");

let page = 1;
let searchWord;
let totalHits;

form.addEventListener("submit", handleSubmit);
loadMore.addEventListener("click", handleLoadMore)

async function handleSubmit(event) {
    event.preventDefault();
    
    buttonContainer.classList.add('load-more-hidden');
    // Reset gallery
    galleryContainer.innerHTML = "";
    
    searchWord = event.target.elements.search.value.trim();
    
    if (!searchWord) {
        iziToast.error({
            message: "Please enter a keyword into the search field",
            position: "topRight",
            timeout: 1500
        });
        return;
    }

    loaderIconContainer.classList.toggle("loader");

    try {
        const { data } = await fetchData(searchWord, page);
        const imagesArr = data.hits;

        if (imagesArr.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
                timeout: 1500
            });
        } else {
            totalHits = data.totalHits
            const galleryMarkup = generateMarkup(imagesArr);
            renderImagesingallery(galleryMarkup, galleryContainer);
            buttonContainer.classList.remove('load-more-hidden');
        }
    } catch (error) {
        iziToast.error({
            message: error.message,
            position: "topRight",
            timeout: 5000
        });
    } finally {
        loaderIconContainer.classList.toggle("loader");
        event.target.elements.search.value = "";
    }
}


async function handleLoadMore(event) {
    event.preventDefault(); 
    loadMore.disabled = true;

    if (totalHits <= page * 15) {
        buttonContainer.classList.add('load-more-hidden');
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: "topRight",
        });
        return;
    }

    page += 1;
    loaderIconContainer.classList.toggle("loader");

    try {
        const { data } = await fetchData(searchWord, page);
        const imagesArr = data.hits;
        totalHits = data.totalHits;
        const galleryMarkup = generateMarkup(imagesArr);

        renderImagesingallery(galleryMarkup, galleryContainer);

        const card = document.querySelector(".photo-card");
        const cardHeight = card.getBoundingClientRect().height;
        window.scrollBy({
                left: 0,
                top: cardHeight*2,
                behavior: "smooth"
        })
    } catch (error) {
        iziToast.error({
            message: error.message,
            position: "topRight",
        });
    } finally {
        loaderIconContainer.classList.toggle("loader");
        loadMore.disabled = false; 
    }
}

