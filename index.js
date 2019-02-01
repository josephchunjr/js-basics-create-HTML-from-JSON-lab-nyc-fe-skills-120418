



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

const titanicSubmitButton = document.getElementById("Titanic")
const termSumbitButton = document.getElementById("Terminator 2")



const titanicSubmit = () => {
  // i want the title to change to the stored JSON
  let title.innerHTML = movies.Titanic.title
}
  
titanicSubmitButton.addEventListener("Click", titanicSubmit)
  
  
});
