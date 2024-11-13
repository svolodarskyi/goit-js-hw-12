import { generateMarkup, renderImagesingallery } from "./js/render-functions";
import fetchData from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector(".search-field");
const button = document.querySelector("button");
const galleryContainer = document.querySelector(".gallery");
const loaderIconContainer = document.querySelector(".loader-icon-container");
const loadMore = document.querySelector(".js-load-more");


let page = 1;
let searchWord;

button.addEventListener("click", handleClick);
loadMore.addEventListener("click", handleLoadMore)

async function handleClick(event) {
    event.preventDefault();
    
    loadMore.classList.add('load-more-hidden');
    // Reset gallery
    galleryContainer.innerHTML = "";
    loaderIconContainer.classList.toggle("loader");
    searchWord = input.value.trim();
    
    try {
        const { data } = await fetchData(searchWord, page);
        const imagesArr = data.hits;

        if (imagesArr.length === 0 || searchWord === '') {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
        } else {
            const galleryMarkup = generateMarkup(imagesArr);
            renderImagesingallery(galleryMarkup, galleryContainer);
            loadMore.classList.remove('load-more-hidden');
        }
    } catch (error) {
        iziToast.error({
            message: error.message,
            position: "topRight",
        });
    } finally {
        loaderIconContainer.classList.toggle("loader");
        input.value = "";
    }
}


async function handleLoadMore(event) {
    event.preventDefault(); 
    scrollTopBtn.style.display = 'block';

    loadMore.disabled = true;

    page += 1;
    loaderIconContainer.classList.toggle("loader");

    try {
        const { data } = await fetchData(searchWord, page);
        const imagesArr = data.hits;

        if (data.totalHits <= page * 15) {
            loadMore.classList.add('load-more-hidden');
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight",
            });

        } else {
            const galleryMarkup = generateMarkup(imagesArr);
            renderImagesingallery(galleryMarkup, galleryContainer);
            const card = document.querySelector(".photo-card");
            const cardHeight = card.getBoundingClientRect().height;
            window.scrollBy({
                left: 0,
                top: cardHeight*2,
                behavior: "smooth"
        })
        }
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

