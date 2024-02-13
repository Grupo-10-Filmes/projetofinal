const zeroFilme = fetch("http://www.omdbapi.com/?t=at+once&y=2022&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const zeroFilmeSrc = document.querySelector(".aomesmolugar");
  zeroFilmeSrc.src = dados.Poster;
});

const primeiroFilme = fetch("http://www.omdbapi.com/?t=front&y=2022&plot=full&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const primeiroFilmeSrc = document.querySelector(".front");
  primeiroFilmeSrc.src = dados.Poster;
  console.log (dados)
});

const segundoFilme = fetch("https://www.omdbapi.com/?t=avatar&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const segundoFilmeSrc = document.querySelector(".avatar1");
  segundoFilmeSrc.src = dados.Poster;
});

const terceiroFilme = fetch("http://www.omdbapi.com/?t=Banshees+&y=2022&plot=full&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const terceiroFilmeSrc = document.querySelector(".banshees");
  terceiroFilmeSrc.src = dados.Poster;
});

const quartoFilme = fetch("http://www.omdbapi.com/?t=elvis&y=2022&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const quartoFilmeSrc = document.querySelector(".elvis1");
  quartoFilmeSrc.src = dados.Poster;
});

const quintoFilme = fetch("http://www.omdbapi.com/?t=Fabelmans&y=2022&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const quintoFilmeSrc = document.querySelector(".fabelmans1");
  quintoFilmeSrc.src = dados.Poster;
});

const sextoFilme = fetch("http://www.omdbapi.com/?t=t%C3%A1r&y=2022&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const sextoFilmeSrc = document.querySelector(".tar1");
  sextoFilmeSrc.src = dados.Poster;
});

const setimoFilme = fetch("http://www.omdbapi.com/?t=maverick&y=2022&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const setimoFilmeSrc = document.querySelector(".maverick1");
  setimoFilmeSrc.src = dados.Poster;
});

const oitavoFilme = fetch("http://www.omdbapi.com/?t=Sadness&y=2022&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const oitavoFilmeSrc = document.querySelector(".trsiteza1");
  oitavoFilmeSrc.src = dados.Poster;
});

const nonoFilme = fetch("http://www.omdbapi.com/?t=women&y=2022&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const nonoFilmeSrc = document.querySelector(".mulheres1");
  nonoFilmeSrc.src = dados.Poster;
});