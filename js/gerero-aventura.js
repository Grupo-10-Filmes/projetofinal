//CHAMADA DE API NAS IMAGENS
const  filmefundacao = fetch("http://www.omdbapi.com/?t=foundation&y=2021&apikey=2b9f0443")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const filmefundacaoSrc = document.querySelector(".fundacao");
  filmefundacaoSrc.src = dados.Poster;
  console.log (dados)
});

const  filmeArmageddon = fetch("http://www.omdbapi.com/?t=Armageddon&apikey=2b9f0443")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const filmeArmageddonSrc = document.querySelector(".Armageddon");
  filmeArmageddonSrc.src = dados.Poster;
  console.log (dados)
});

const  filmeprimeiroencontro = fetch("http://www.omdbapi.com/?t=Arrival&y=2016&apikey=2b9f0443")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const filmeprimeiroencontroSrc = document.querySelector(".primeiroencontro");
  filmeprimeiroencontroSrc.src = dados.Poster;
  console.log (dados)
});

