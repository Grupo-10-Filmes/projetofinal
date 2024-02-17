const filmeAmor = fetch("https://www.omdbapi.com/?t=amor&apikey=f7713d81")
  .then((response) => {
    return response.json();
  })
  .then((dados) => {
    const filmeAmorSrc = document.querySelectorAll(".amor");
    filmeAmorSrc.forEach(function (item) {
      item.src = dados.Poster;
    });

    const filmeAmorTitle = document.querySelectorAll(".title-amor");
    filmeAmorTitle.forEach(function (item) {
      item.innerText = dados.Title;
    });

    const filmeAmorDescricao = document.querySelectorAll(".descricao");
    filmeAmorDescricao.forEach(function (item) {
      item.innerText = dados.Plot;
    });

    const elenco = document.querySelector(".elenco");
    elenco.innerText = dados.Actors;
  });

const filmeThor = fetch("https://www.omdbapi.com/?t=thor&apikey=f7713d81")
  .then((response) => {
    return response.json();
  })
  .then((dados) => {
    const filmeThorSrc = document.querySelectorAll(".thor");
    filmeThorSrc.forEach(function (item) {
      item.src = dados.Poster;
    });

    const filmeThorTitle = document.querySelectorAll(".title-thor");
    filmeThorTitle.forEach(function (item) {
      item.innerText = dados.Title;
    });

    const filmeThorDescricao = document.querySelectorAll(".descricao-thor");
    filmeThorDescricao.forEach(function (item) {
      item.innerText = dados.Plot;
    });

    const elencoThor = document.querySelector(".elenco-thor");
    elencoThor.innerText = dados.Actors;
  });

const filmeAvatar = fetch("https://www.omdbapi.com/?t=avatar&apikey=f7713d81")
  .then((response) => {
    return response.json();
  })
  .then((dados) => {
    const filmeAvatarSrc = document.querySelectorAll(".avatar");
    filmeAvatarSrc.forEach(function (item) {
      item.src = dados.Poster;
    });

    const filmeAvatarTitle = document.querySelectorAll(".title-avatar");
    filmeAvatarTitle.forEach(function (item) {
      item.innerText = dados.Title;
    });

    const filmeAvatarDescricao = document.querySelectorAll(".descricao-avatar");
    filmeAvatarDescricao.forEach(function (item) {
      item.innerText = dados.Plot;
    });

    const elencoAvatar = document.querySelector(".elenco-avatar");
    elencoAvatar.innerText = dados.Actors;
  });
