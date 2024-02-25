function fetchAndDisplayMovieInfo(
  title,
  posterClass,
  titleClass,
  plotClass,
  actorsClass
) {
  fetch(`https://www.omdbapi.com/?t=${title}&apikey=f7713d81`)
    .then((response) => response.json())
    .then((dados) => {
      const posterElements = document.querySelectorAll(`.${posterClass}`);
      posterElements.forEach(function (item) {
        item.src = dados.Poster;
      });

      const titleElements = document.querySelectorAll(`.${titleClass}`);
      titleElements.forEach(function (item) {
        item.innerText = dados.Title;
      });

      const plotElements = document.querySelectorAll(`.${plotClass}`);
      plotElements.forEach(function (item) {
        item.innerText = dados.Plot;
      });

      const actorsElement = document.querySelector(`.${actorsClass}`);
      actorsElement.innerText = dados.Actors;
    });
}

fetchAndDisplayMovieInfo("amor", "amor", "title-amor", "descricao", "elenco");
fetchAndDisplayMovieInfo(
  "thor",
  "thor",
  "title-thor",
  "descricao-thor",
  "elenco-thor"
);
fetchAndDisplayMovieInfo(
  "avatar",
  "avatar",
  "title-avatar",
  "descricao-avatar",
  "elenco-avatar"
);
