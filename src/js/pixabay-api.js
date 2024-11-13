import axios from 'axios';

const API_KEY = "46939525-73ecae044838d7dfbbfadb664";
const BASE_URL = "https://pixabay.com/api/"

async function fetchData(key_word, page=1) {
    return await axios(BASE_URL, {
        params: {
        key: API_KEY,
        page: page,
        per_page: 15,
        q: key_word,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    }})
        
}

export default fetchData;