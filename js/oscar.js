//CHAMADA DE API NAS IMAGENS

// const zeroFilme = fetch("http://www.omdbapi.com/?t=at+once&y=2022&apikey=16d07928")
// .then((response) => {
//   return response.json();
// })
// .then((dados) => {
//   const zeroFilmeSrc = document.querySelector(".aomesmolugar");
//   zeroFilmeSrc.src = dados.Poster;
// });

const primeiroFilme = fetch("http://www.omdbapi.com/?t=Front&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const primeiroFilmeSrc = document.querySelector(".front");
  primeiroFilmeSrc.src = dados.Poster;
  console.log (dados)
});

const segundoFilme = fetch("https://www.omdbapi.com/?t=avatar+The+Way+of+Water&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const segundoFilmeSrc = document.querySelector(".avatar1");
  segundoFilmeSrc.src = dados.Poster;
});

const terceiroFilme = fetch("http://www.omdbapi.com/?t=banshees+of+inisherin&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const terceiroFilmeSrc = document.querySelector(".banshees");
  terceiroFilmeSrc.src = dados.Poster;
});

const quartoFilme = fetch("http://www.omdbapi.com/?t=elvis&apikey=16d07928")
.then((response) => {
  return response.json();
})
.then((dados) => {
  const quartoFilmeSrc = document.querySelector(".elvis1");
  quartoFilmeSrc.src = dados.Poster;
});

const quintoFilme = fetch("http://www.omdbapi.com/?t=The+Fabelmans&apikey=16d07928")
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
  const oitavoFilmeSrc = document.querySelector(".triangulo1");
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


//COLOCANDO OPACIDADE NOS ELEMENTOS
// document.addEventListener("DOMContentLoaded", function() {
//   var imagensOscar = document.querySelectorAll(".aomesmolugar");
//   imagensOscar.forEach(function(imagem) {
//       imagem.addEventListener("mouseover", function() {
//           imagem.style.opacity = "0.4";
//       });
//       imagem.addEventListener("mouseout", function() {
//           imagem.style.opacity = "1";
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var imagensFront = document.querySelectorAll(".front");
//   imagensFront.forEach(function(imagem) {
//       imagem.addEventListener("mouseover", function() {
//           imagem.style.opacity = "0.4";
//       });
//       imagem.addEventListener("mouseout", function() {
//           imagem.style.opacity = "1";
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var imagensAvatar = document.querySelectorAll(".avatar1");
//   imagensAvatar.forEach(function(imagem) {
//       imagem.addEventListener("mouseover", function() {
//           imagem.style.opacity = "0.4";
//       });
//       imagem.addEventListener("mouseout", function() {
//           imagem.style.opacity = "1";
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var imagensBanshees = document.querySelectorAll(".banshees");
//   imagensBanshees.forEach(function(imagem) {
//       imagem.addEventListener("mouseover", function() {
//           imagem.style.opacity = "0.4";
//       });
//       imagem.addEventListener("mouseout", function() {
//           imagem.style.opacity = "1";
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var imagensElvis = document.querySelectorAll(".elvis1");
//   imagensElvis.forEach(function(imagem) {
//       imagem.addEventListener("mouseover", function() {
//           imagem.style.opacity = "0.4";
//       });
//       imagem.addEventListener("mouseout", function() {
//           imagem.style.opacity = "1";
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var imagensFabelmans = document.querySelectorAll(".fabelmans1");
//   imagensFabelmans.forEach(function(imagem) {
//       imagem.addEventListener("mouseover", function() {
//           imagem.style.opacity = "0.4";
//       });
//       imagem.addEventListener("mouseout", function() {
//           imagem.style.opacity = "1";
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var imagensTar = document.querySelectorAll(".tar1");
//   imagensTar.forEach(function(imagem) {
//       imagem.addEventListener("mouseover", function() {
//           imagem.style.opacity = "0.4";
//       });
//       imagem.addEventListener("mouseout", function() {
//           imagem.style.opacity = "1";
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var imagensMaverick = document.querySelectorAll(".maverick1");
//   imagensMaverick.forEach(function(imagem) {
//       imagem.addEventListener("mouseover", function() {
//           imagem.style.opacity = "0.4";
//       });
//       imagem.addEventListener("mouseout", function() {
//           imagem.style.opacity = "1";
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var imagensTrianguloTristeza = document.querySelectorAll(".triangulo1");
//   imagensTrianguloTristeza.forEach(function(imagem) {
//       imagem.addEventListener("mouseover", function() {
//           imagem.style.opacity = "0.4";
//       });
//       imagem.addEventListener("mouseout", function() {
//           imagem.style.opacity = "1";
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var imagensMulheres = document.querySelectorAll(".mulheres1");
//   imagensMulheres.forEach(function(imagem) {
//       imagem.addEventListener("mouseover", function() {
//           imagem.style.opacity = "0.4";
//       });
//       imagem.addEventListener("mouseout", function() {
//           imagem.style.opacity = "1";
//       });
//   });
// });