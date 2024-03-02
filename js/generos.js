// Lista de filmes
const movies = [
  { title: "Asterix Obelix", class: "asterix", year: "2023" },
  { title: "The Super Mario", class: "supermario" },
  { title: "LEGO Friends", class: "lego" },
  { title: "lift", class: "lift" },
  { title: "animal", class: "animal" },
  { title: "sisu", class: "sisu" },
  { title: "life in a year", class: "life" },
  { title: "Society of the Snow", class: "snow" },
  { title: "Forgotten Love", class: "forgotten" },
  { title: "The Conference", class: "conference" },
  { title: "Phenomena", class: "phenomena", year: "2023" },
  { title: "Killer Book Club", class: "killer" },
  { title: "Your Place or Mine", class: "place" },
  { title: "Happiness for Beginners", class: "beginners" },
  { title: "Love at first sight", class: "loveat" }
];

// Função que busca e atualiza os dados do filme
function fetchAndSetMovieData(movie) {
  let url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie.title)}&apikey=1a9fcd28`;
  if (movie.year) {
    url += `&y=${movie.year}`;
  }
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const movieSrc = document.querySelector(`.${movie.class}`);
      if (movieSrc) {
        movieSrc.src = data.Poster;
      }
    });
}

// Loop para cada filme da lista de filmes na função de busca e atualização 
movies.forEach(movie => {
  fetchAndSetMovieData(movie);
});