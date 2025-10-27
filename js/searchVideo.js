import { apiConnect } from "./apiConnect.js";

async function searchVideo(event) {
    event.preventDefault()
    const searchData = document.querySelector("[search-data]").value;
    const search = await apiConnect.searchVideo(searchData);
    console.log(search);
}

const searchButton = document.querySelector("[search-data-button]");

searchButton.addEventListener("click", event => searchVideo(event));