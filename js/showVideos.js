import { apiConnect } from "./apiConnect.js";

const list = document.querySelector("[data-list]");

function cardBuilder(title, description, url, image) {
    const video = document.createElement("li");
    video.className = "video__items";
    video.innerHTML =  `<iframe width="100%" height="72%" src="${url}"
                            title="${title}"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        <div class="description__video">
                            <img src="${image}" alt="">
                            <h3>${title}</h3>
                            <p>${description}</p>
                        </div>`

    return video;
}

async function videoList() {
    const apiList = await apiConnect.videosList();
    apiList.forEach(e => list.appendChild(cardBuilder(e.title, e.description, e.url, e.image)));
}

videoList();