const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
function toggleSearch() {   
    if (searchInput.style.display === "none") {
        searchInput.style.display = "flex";
        searchInput.style.border = "2px solid #5733F5"
        searchButton.innerHTML = "x";
    } else {
        searchInput.style.display = "none";
        searchButton.innerHTML = "svg?"
    }
}

searchButton.addEventListener("click", toggleSearch)