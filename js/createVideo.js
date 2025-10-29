import { apiConnect } from "./apiConnect.js";

const form = document.querySelector("[data-form]");

async function createVideo(event) {
    event.preventDefault();

    const image = document.querySelector("[data-image]").value;
    const title = document.querySelector("[data-title]").value;
    const url = document.querySelector("[data-url]").value;
    const description = Math.floor(Math.random() * 100).toString();

    await apiConnect.createVideo(title, description, url, image);

    window.location.href = "../pages/uploaded-video.html";
}

form.addEventListener("submit", event => createVideo(event));