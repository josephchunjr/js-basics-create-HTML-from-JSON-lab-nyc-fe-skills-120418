



document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  
const title = document.getElementById("title")
const director = document.getElementById("director")
const genre = document.getElementById("genre")
const filmRating = document.getElementById("filmRating")

const poster = document.getElementById("poster")
const description = document.getElementById("description")
const audienceScore = document.getElementById("audienceScore")
const listSelection = document.getElementById("listSelection")
const cast = document.getElementById("cast")
const actor = document.getElementById("actor")

console.log(movies.Titanic.title)

//1 
const titanicButton = document.getElementById("Titanic")
const terminatorButton = document.getElementById("Terminator")

//2 

const changeMovie = (movie) => {
  const titleElement = document.getElementById("title")
  titleElement.innerHTML = movies[movie].title
}

titanicButton.addEventListener("click", () => changeMovie("Titanic"))
terminatorButton.addEventListener("click", () => changeMovie("Terminator 2"))



  
});
