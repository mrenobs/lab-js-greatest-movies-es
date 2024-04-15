// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  const directors = movies.map (movie => movie.director);
  return directors;
}

const directorList = getAllDirectors(movies);
console.log(directorList);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies1) {
  const directors1 = movies1.map(movie => movie.director);

  const uniqueDirectors = new Set(directors1);

  const uniqueDirectorsArray = Array.from(uniqueDirectors);

  return uniqueDirectorsArray;
}

const uniqueDirectorsList = getAllDirectors(movies);

console.log(uniqueDirectorsList);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies2) {
  const stevenFiltered = movies2.filter( movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
  return stevenFiltered.length;
}
const Quantity = howManyMovies(movies)
console.log(`Steven Spielberg dirigió ${Quantity} peliculas de drama`);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies3){
  const scores = movies3.filter(movie => movie.score);
  const totalScores = scores;
  const totalSum = scores.reduce((acc, score) => + score, 0);
  
  const average = totalSum / totalScores;
  
  const roundedAverage = average.toFixed[2];
  return parseFloat(roundedAverage);
}

const averageScore = scoresAverage(movies);
console.log(`El promedio de las puntuaciones es: ${averageScore}`);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies4) {
  const dramaScore = movies4.filter (movies => movies.genre.includes(`Drama`));
  const totalSum1 = movies.reduce((acc, movies)=> acc + movies.score, 0);
  const average1 = totalSum1 / dramaScore;
  const roundedAverage1 = average1.toFixed[2];
  return parseFloat(roundedAverage1);
}
const dramaAverageScore = dramaMoviesScore(movies);
console.log(`La puntuacion de las peliculas de drama es: ${dramaAverageScore}`);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieList) {
  const sortedMovies = movieList.sort((a, b) => {
    if ( a.year !== navigator.year){
      return a.year - b.year;
    } else {
      return a.title.localCompare(b.title);
    }

  });
  return[...sortedMovies];
}
const sortedMovies = orderByYear(movies);
sortedMovies.forEach(movie => {
  console.log(`${movie.title} (${movie.year})`);
});

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedTitles = moviesArray
  .map(movie => movie.title)
 .sort ();
  return sortedTitles.slice(0, 20);
}

const sortedTitles = orderAlphabetically(movies);
console.log(sortedTitles);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray1) {
  const newMovieList = moviesArray1.map(movies => {
    const durationParts = movies.duration.split(" ");
    const hours = parseInt(durationParts[0].replace(`h`, ``)) || 0;
    const minutes = parseInt(durationParts[1].replace(`min`, ``)) || 0;
    const totalMinutes = hours * 60 + minutes;
    return {
      ...movies,
      duration: totalMinutes
    };
  });
  return newMovieList;
}
const updatedMovies = turnHoursToMinutes(movies);
updatedMovies.forEach(movie => {
    console.log(`${movie.title} (${movie.duration} minutos)`);
});
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray3) {
  const yearStats = {};
  movieList.forEach(movie => {
    const year = movie.year;
    const score = movie.score;
    if (!yearStats[year]){
      yearStats[year] = { totalScore: 0, movieCount: 0};

    }
    yearStats[year].totalScore += score;
    yearStats[year].movieCount++;
  });
  let bestYear = null;
  let bestAvgScore = 0;
  for (const year in yearStats){
    const avgScore = yearStats[year].totalScore / yearStats[year].movieCount;
    if (avgScore > bestAvgScore) {
      bestAvgScore = avgScore;
      bestYear = year;
    }
  }
  return `El mejor año fue ${bestYear} con una puntuación media de ${bestAvgScore.toFixed(2)}.`;

}
const result = bestYearAvg(movies);
console.log(result);


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
 }
