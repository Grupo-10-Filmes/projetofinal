const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTY3Y2ZmM2Q2NDI0MTBiODcyZTVmYzAxYjdhNjBhNSIsInN1YiI6IjY1YzUxNmZhMmJjZjY3MDE4MzkwY2ZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H43fGPQ2jL4X4g4r6f5CRxWQmS4Q2hKlW-CFUcZf-es'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));