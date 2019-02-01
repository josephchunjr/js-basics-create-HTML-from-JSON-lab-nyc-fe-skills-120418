



document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  


//1 
const titanicButton = document.getElementById("Titanic")
const terminatorButton = document.getElementById("Terminator 2")

//2 

const changeMovie = (movie) => {
  const titleElement = document.getElementById("title")
  titleElement.innerHTML = movies[movie].title
  const directorElement = document.getElementById("director")
  directorElement.innerHTML = movies[movie].director
  const genreElement = document.getElementById("genre")
  genreElement.innerHTML = movies[movie].genre
  const filmRatingElement = document.getElementById("filmRating")
  filmRatingElement.innerHTML = movies[movie].filmRating
  
  //poster
  
  const posterImg = document.getElementById("poster")
  posterImg.src = movies[movie].poster
  
  
}

titanicButton.addEventListener("click", () => changeMovie("Titanic"))
terminatorButton.addEventListener("click", () => changeMovie("Terminator 2"))



  
});
