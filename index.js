const exampleMovies = require("./movies");

function getAllMovieTitles(moviesObj) {
  if (moviesObj.length == 0){
    throw "Error: No movie titles given!"
  };
  return moviesObj.map((key) => {
    return key.title;
  });
};

function checkIfAnyMovieHasRating(moviesObj, rating) {
  if (moviesObj.length == 0){
    throw "Error: No movie titles given!"
  };
  if(!rating){
    rating = "G";
  };
  return moviesObj.some((key) => {
    return key.rated == rating;
  });
};

function findById(moviesObj, id) {
  if (moviesObj.length == 0){
    throw "Error: No movie titles given!"
  };
  result = moviesObj.find((key) => {
    if (key.imdbID == id) {
      return { key };
    }
  });
  if (!result){
    result = null;
  };
  return result;
};
// accidentally put return null  twice 

function filterByGenre(moviesObj, genre) {
  if (moviesObj.length == 0){
    throw "Error: No movie titles given!"
  };
  return moviesObj.filter((key) => {
    return key.genre.toLowerCase().includes(genre.toLowerCase())
  });
};

function getAllMoviesReleasedAtOrBeforeYear(moviesObj, year) {
  if (moviesObj.length == 0){
    throw "Error: No movie titles given!"
  };
  return moviesObj.filter(({released}) => {
    return Number(released.slice(-4)) <= year;
  });
};
// forgot to replace key with released

/**
 * getRottenTomatoesScoreByMovie()
 * -----------------------------
 * Transform each movie, returning an array of objects where the key is the title of the movie and the value is the score received from Rotten Tomatoes. If there are no movies, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object[]|Error} An array of movie objects where the key is the movie title and the value is the score received from Rotten Tomatoes.
 * 
 * NOTE: You must use both the `.map()` method and the `.find()` method.
 *
 * EXAMPLE:
 *  getRottenTomatoesScoreByMovie(movies);
 *  //> [
      { "Toy Story 4": "97%" },
      { "Inside Out": "98%" },
      { Coco: "97%" },
      { "Incredibles 2": "93%" },
      { Moana: "95%" },
      { "How to Train Your Dragon": "99%" },
      { Paddington: "97%" },
      { "The Lion King": "93%" },
      { Fantasia: "95%" },
      { "James and the Giant Peach": "91%" },
    ];
 */
function getRottenTomatoesScoreByMovie() {}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  checkIfAnyMovieHasRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getRottenTomatoesScoreByMovie,
};
