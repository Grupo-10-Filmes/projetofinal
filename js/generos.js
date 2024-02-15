// Filmes Infantil
const movieAsterix = fetch("https://www.omdbapi.com/?t=Asterix+Obelix&y=2023&apikey=1a9fcd28")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const movieAsterixSrc = document.querySelector(".asterix");
    movieAsterixSrc.src = data.Poster;
  });

  const movieSuperMario = fetch("https://www.omdbapi.com/?t=The+Super+Mario+&apikey=1a9fcd28")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const movieSuperMarioSrc = document.querySelector(".supermario");
    movieSuperMarioSrc.src = data.Poster;
  });

  const movieLego = fetch("https://www.omdbapi.com/?t=LEGO+Friends&apikey=1a9fcd28")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const movieLegoSrc = document.querySelector(".lego");
    movieLegoSrc.src = data.Poster;
  });

// Filmes Ação
const movieLift = fetch("https://www.omdbapi.com/?t=lift&apikey=1a9fcd28")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const movieLiftSrc = document.querySelector(".lift");
    movieLiftSrc.src = data.Poster;
  });

  const movieAnimal = fetch("https://www.omdbapi.com/?t=animal&apikey=1a9fcd28")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const movieAnimalSrc = document.querySelector(".animal");
    movieAnimalSrc.src = data.Poster;
  });

  const movieSisu = fetch("https://www.omdbapi.com/?t=sisu&apikey=1a9fcd28")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const movieSisuSrc = document.querySelector(".sisu");
    movieSisuSrc.src = data.Poster;
  });
  
  // Filmes Drama
const movieLife = fetch("https://www.omdbapi.com/?t=life+in+a+year&apikey=1a9fcd28")
.then((response) => {
  return response.json();
})
.then((data) => {
  const movieLifeSrc = document.querySelector(".life");
  movieLifeSrc.src = data.Poster;
});

// const movieSuperMario = fetch("https://www.omdbapi.com/?t=The+Super+Mario+&apikey=1a9fcd28")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const movieSuperMarioSrc = document.querySelector(".supermario");
//   movieSuperMarioSrc.src = data.Poster;
// });

// const movieLego = fetch("https://www.omdbapi.com/?t=LEGO+Friends&apikey=1a9fcd28")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const movieLegoSrc = document.querySelector(".lego");
//   movieLegoSrc.src = data.Poster;
// });

// // Filmes Terror
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

//   // Filmes Romance
// const movieAsterix = fetch("https://www.omdbapi.com/?t=Asterix+Obelix&y=2023&apikey=1a9fcd28")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const movieAsterixSrc = document.querySelector(".asterix");
//   movieAsterixSrc.src = data.Poster;
// });

// const movieSuperMario = fetch("https://www.omdbapi.com/?t=The+Super+Mario+&apikey=1a9fcd28")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const movieSuperMarioSrc = document.querySelector(".supermario");
//   movieSuperMarioSrc.src = data.Poster;
// });

// const movieLego = fetch("https://www.omdbapi.com/?t=LEGO+Friends&apikey=1a9fcd28")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const movieLegoSrc = document.querySelector(".lego");
//   movieLegoSrc.src = data.Poster;
// });