const exampleMovies = require("./movies");

function getAllMovieTitles(moviesObj) {
  if (moviesObj.length == 0) {
    throw "Error: No movie titles given!";
  }
  return moviesObj.map((key) => {
    return key.title;
  });
}

function checkIfAnyMovieHasRating(moviesObj, rating) {
  if (moviesObj.length == 0) {
    throw "Error: No movie titles given!";
  }
  if (!rating) {
    rating = "G";
  }
  return moviesObj.some((key) => {
    return key.rated == rating;
  });
}

function findById(moviesObj, id) {
  if (moviesObj.length == 0) {
    throw "Error: No movie titles given!";
  }
  result = moviesObj.find((key) => {
    if (key.imdbID == id) {
      return { key };
    }
  });
  if (!result) {
    result = null;
  }
  return result;
}
// accidentally put return null  twice

function filterByGenre(moviesObj, genre) {
  if (moviesObj.length == 0) {
    throw "Error: No movie titles given!";
  }
  return moviesObj.filter((key) => {
    return key.genre.toLowerCase().includes(genre.toLowerCase());
  });
}

function getAllMoviesReleasedAtOrBeforeYear(moviesObj, year) {
  if (moviesObj.length == 0) {
    throw "Error: No movie titles given!";
  }
  return moviesObj.filter(({ released }) => {
    return Number(released.slice(-4)) <= year;
  });
}
// forgot to replace key with released

function getRottenTomatoesScoreByMovie(moviesObj) {
  if (moviesObj.length == 0) {
    throw "Error: No movie titles given!";
  }
  return moviesObj.map((key) => {
    let score = key["ratings"].find((key2) => {
      return key2.source == "Rotten Tomatoes";
    });
    return { [key.title]: score.value };
  });
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  checkIfAnyMovieHasRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getRottenTomatoesScoreByMovie,
};
