// Stating my constants
const apiKey = "b777522a168b4f933547e01643057b97";
const imgApi = "https://image.tmdb.org/t/p/w500";
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const form = document.getElementById("search-form");
const query = document.getElementById("search-input");
const result = document.getElementById("result");
let page = 1;
let isSearching = false;

// Fetching JSON data from url
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was faulty");
        }
        return await response.json();
    } catch (error) {
        return null;
    }
}

// Fetch and show results using the url
async function fetchAndShowResult(url) {
    const data = await fetchData(url);
    if (data && data.results) {
        showResults(data.results);
        isSearching = false; // Reset isSearching after fetching results
    }
}

// Defining a function that creates the movie cards
function createMovieCard(movie) {
    const { poster_path, original_title, release_date, overview } = movie;
    const imagePath = poster_path ? imgApi + poster_path : "./img-01.jpeg";
    const truncatedTitle =
        original_title.length > 15 ? original_title.slice(0, 15) + "..." : original_title;
    const formattedDate = release_date || "No release date";

    const cardTemplate = `
      <div class="column">
        <div class="card">
          <a class="card-media" href="${imagePath}" target="_blank">
            <img src="${imagePath}" alt="${original_title}" width="100%" />
          </a>
          <div class="card-content">
            <div class="card-header">
              <div class="left-content">
                <h3 style="font-weight: 600">${truncatedTitle}</h3>
                <span style="color: #12efec">${formattedDate}</span>
              </div>
              <div class="right-content">
                <a href="${imagePath}" target="_blank" class="card-btn">See Cover</a>
              </div>
            </div>
            <div class="info">${overview || "No overview yet..."}</div>
          </div>
        </div>
      </div>`;
    return cardTemplate;
}

// Clear result element for Search
function clearResult() {
    result.innerHTML = "";
}

// Display results on the page
function showResults(items) {
    const newContent = items.map(createMovieCard).join("");
    result.innerHTML += newContent || "<p>No results found.</p>";
}

// Load more results
async function loadMoreResults() {
    if (isSearching) {
        return;
    }
    isSearching = true;
    page++;
    const searchTerm = query.value;
    const url = searchTerm ? `${searchUrl}${searchTerm}&page=${page}` : `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
    await fetchAndShowResult(url);
}

// Detect end of page and load more results
function detectEnd() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
        loadMoreResults();
    }
}

// Handle the Search functionality
async function handleSearch(e) {
    e.preventDefault();
    const searchTerm = query.value.trim();
    if (searchTerm) {
        isSearching = true;
        clearResult();
        page = 1; // Reset page to 1 when a new search is initiated
        const newUrl = `${searchUrl}${searchTerm}&page=${page}`;
        await fetchAndShowResult(newUrl);
        query.value = "";
    }
}

// Adding Event listeners
form.addEventListener('submit', handleSearch);
window.addEventListener('scroll', detectEnd);
window.addEventListener('resize', detectEnd);

// Initializing the page
async function init() {
    clearResult();
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
    isSearching = false;
    await fetchAndShowResult(url);
}

init(); // Initializes the page
