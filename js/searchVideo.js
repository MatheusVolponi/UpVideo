import { apiConnect } from "./apiConnect.js";
import cardBuilder from "./showVideos.js"

async function searchVideo(event) {
    event.preventDefault();
    
    const searchData = document.querySelector("[search-data]").value;
    
    if (!searchData.trim()) {
        console.log("Campo de busca vazio");
        return;
    }
    
    try {
        const search = await apiConnect.searchVideo(searchData);
        
        const list = document.querySelector("[data-list]");

        // Limpa a lista
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        // Adiciona os resultados
        if (search.length === 0) {
            list.innerHTML = '<p class="message__title>Nenhum vídeo encontrado</p>';
        } else {
            search.forEach(e => list.appendChild(
                cardBuilder(e.title, e.description, e.url, e.image)
            ));
        }
    } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
    }
}

const searchButton = document.querySelector("[search-data-button]");
const searchInput = document.querySelector("[search-data]");

if (searchButton) {
    searchButton.addEventListener("click", (event) => {
        searchVideo(event);
    });
}

if (searchInput) {
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchVideo(event);
        }
    });
}