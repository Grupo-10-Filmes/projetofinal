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

// Função para buscar e atualizar as informações dos filmes
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

movies.forEach(movie => {
  fetchAndSetMovieData(movie);
});
// function fetchAndSetMovieData(movie) {
//   let url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie.title)}&apikey=1a9fcd28`;
//   if (movie.year) {
//     url += `&y=${movie.year}`;
//   }
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const movieSrc = document.querySelector(`.${movie.class}`);
//       if (movieSrc) {
//         movieSrc.src = data.Poster;
//       }
//     });

// }movies.forEach(movie => {
//   fetchAndSetMovieData(movie);
// });






// // Filmes Infantil
// const movieAsterix = fetch("https://www.omdbapi.com/?t=Asterix+Obelix&y=2023&apikey=1a9fcd28")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const movieAsterixSrc = document.querySelector(".asterix");
//     movieAsterixSrc.src = data.Poster;
//   });

//   const movieSuperMario = fetch("https://www.omdbapi.com/?t=The+Super+Mario+&apikey=1a9fcd28")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const movieSuperMarioSrc = document.querySelector(".supermario");
//     movieSuperMarioSrc.src = data.Poster;
//   });

//   const movieLego = fetch("https://www.omdbapi.com/?t=LEGO+Friends&apikey=1a9fcd28")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const movieLegoSrc = document.querySelector(".lego");
//     movieLegoSrc.src = data.Poster;
//   });

// // Filmes Ação
// const movieLift = fetch("https://www.omdbapi.com/?t=lift&apikey=1a9fcd28")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const movieLiftSrc = document.querySelector(".lift");
//     movieLiftSrc.src = data.Poster;
//   });

//   const movieAnimal = fetch("https://www.omdbapi.com/?t=animal&apikey=1a9fcd28")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const movieAnimalSrc = document.querySelector(".animal");
//     movieAnimalSrc.src = data.Poster;
//   });

//   const movieSisu = fetch("https://www.omdbapi.com/?t=sisu&apikey=1a9fcd28")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const movieSisuSrc = document.querySelector(".sisu");
//     movieSisuSrc.src = data.Poster;
//   });
  
//   // Filmes Drama
// const movieLife = fetch("https://www.omdbapi.com/?t=life+in+a+year&apikey=1a9fcd28")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const movieLifeSrc = document.querySelector(".life");
//   movieLifeSrc.src = data.Poster;
// });

// const movieSnow = fetch("https://www.omdbapi.com/?t=Society+of+the+Snow&apikey=1a9fcd28")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const movieSnowSrc = document.querySelector(".snow");
//   movieSnowSrc.src = data.Poster;
// });

// const movieForgotten = fetch("https://www.omdbapi.com/?t=Forgotten+Love&apikey=1a9fcd28")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const movieForgottenSrc = document.querySelector(".forgotten");
//   movieForgottenSrc.src = data.Poster;
// });

// // Filmes Terror
// const movieConference = fetch("https://www.omdbapi.com/?t=The+Conference&apikey=1a9fcd28")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const movieConferenceSrc = document.querySelector(".conference");
//     movieConferenceSrc.src = data.Poster;
//   });

//   const moviePhenomena = fetch("https://www.omdbapi.com/?t=Phenomena&y=2023&apikey=1a9fcd28")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const moviePhenomenaSrc = document.querySelector(".phenomena");
//     moviePhenomenaSrc.src = data.Poster;
//   });

//   const movieKiller = fetch("https://www.omdbapi.com/?t=Killer+Book+Club&apikey=1a9fcd28")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const movieKillerSrc = document.querySelector(".killer");
//     movieKillerSrc.src = data.Poster;
//   });

//   // Filmes Romance
// const movieYourplace = fetch("https://www.omdbapi.com/?t=Your+Place+or+Mine&apikey=1a9fcd28")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const movieYourplaceSrc = document.querySelector(".place");
//   movieYourplaceSrc.src = data.Poster;
// });

// const movieBeginners = fetch("https://www.omdbapi.com/?t=Happiness+for+Beginners&apikey=1a9fcd28")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const movieBeginnersSrc = document.querySelector(".beginners");
//   movieBeginnersSrc.src = data.Poster;
// });

// const movieLoveat = fetch("https://www.omdbapi.com/?t=Love+at+first+sight&apikey=1a9fcd28")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const movieLoveatSrc = document.querySelector(".loveat");
//   movieLoveatSrc.src = data.Poster;
// });