const filmeAmor = fetch("https://www.omdbapi.com/?t=amor&apikey=f7713d81")
  .then((response) => {
    return response.json();
  })
  .then((dados) => {
    const filmeAmorSrc = document.querySelector(".amor");
    filmeAmorSrc.src = dados.Poster;
    console.log(dados);
  });

const filmeThor = fetch("https://www.omdbapi.com/?t=thor&apikey=f7713d81")
  .then((response) => {
    return response.json();
  })
  .then((dados) => {
    const filmeThorSrc = document.querySelector(".thor");
    filmeThorSrc.src = dados.Poster;
  });

const filmeAvatar = fetch("https://www.omdbapi.com/?t=avatar&apikey=f7713d81")
  .then((response) => {
    return response.json();
  })
  .then((dados) => {
    const filmeAvatarSrc = document.querySelector(".avatar");
    filmeAvatarSrc.src = dados.Poster;
  });
