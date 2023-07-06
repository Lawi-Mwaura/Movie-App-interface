//Stating my constants
const apiKey = "b777522a168b4f933547e01643057b97";
const imgApi = "https://image.tmdb.org/t/p/w1289";
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

const form = document.getElementById("search-form");
const query = document.getElementById("search-input");
const result = document.getElementById("result");

const page = 1;
let isSearching = false;

//Fetching JSON data from url
async function fetchData(url){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Network response was faulty");
        }
        return await response.json();
    } catch (error){
        return null;
    }
}

//Fetch and show results using the url
async function fetchAndShowResult(url){
    const data = await fetchData(url);
    if (data && data.results) {
        showResults(data.results);
    }
}

//Defining a function that creates the movie cards
function createMovieCard(movie){
    const { posterPath, originalTitle, releaseDate, Overview} = movie;
    const imagePath = posterPath ? imgApi + posterPath : "./img-01.jpeg";
    const trunctatedTitle = originalTitle.length > 15 ?
    originalTitle.slice(0, 15) + "..." : originalTitle;
    const formattedDate = releaseDate || "No release date";

    const cardTemplate = `
    <div class="column">
    <div class="card">
    <a class="card-media" href="./img-01.jpeg">
    <img src="${imagePath}" alt="${originalTitle}"
    width="100%"/>
    </a>
    <div class="card-content">
    <div class="card-header">
    <div class="left-content">
    <h3 style="font-weight: 600">${truncatedTitle}</h3>
    <span style="color: #12efec">${formattedDate}</span>
    </div>
    <div class="right-content">
    <a href="${imagePath}" target="_blank"
    class="card-btn"> See Cover</a>
    </div>
    </div>
    <div class="info">${overview || "No overview yet..."}
    </div>
    </div>
    </div>
    </div>`;
    return cardTemplate;
}

//Clear result element for Search
function clearResult(){
    result.innerHTML = "";
}

//Display results in pae
 function showResults(item){
    const newContent = item.map(createMovieCard).join("");
    result.innerHTML = newContent || "<p>No results found.</p>";
}

//Load more results
async function loadMoreResults(){
    if (isSearching){
        return;
    }
    page++;
    const searchTerm = query.value;
    const url = searchTerm ? `${searchUrl}${searchTerm}&page=${page}`: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
    await fetchAndShowResult (url);
}

//Detect end of page and load more results
function detectEnd(){
    const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight - 20){
        loadMoreResults();
    }
}

//Handle the Search functionality
async function handleSearch(event){
      event.preventDefault();
      const searchTerm = query.value.trim();
      if(searchTerm){
        isSearching = true;
        clearResults();
        const newUrl = `${searchUrl}${searchTerm}&page=${page}`;
        await fetchAndShowResult(newUrl);
        query.value = "";
      }
}

