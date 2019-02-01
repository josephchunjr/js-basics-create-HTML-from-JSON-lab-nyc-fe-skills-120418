



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
  
  // description and score
  
  const descriptionElement = document.getElementById("description")
  descriptionElement.innerHTML = movies[movie].description
  const scoreElement = document.getElementById("audienceScore")
  scoreElement.innerHTML = movies[movie].audienceScore
  
  // cast (array of objects)
  
  const castUL = document.createElement("ul") // <ul>
                                              // <li></li></ul>
  
  //for every cast member, we need a li FOR every cast member
  
  for (let person of movies[movie].cast) {
    const li = document.createElement('li')
    li.innerHTML = person.role + ": " + person.actor // Jack: Leonardo DiCaprio
    castUL.appendChild(li)
    
  }
  
  const castDiv = document.getElementById("cast")
  castDiv.appendChild(castUL)
  
  //reviews
  
   const reviewsUL = document.createElement("ul") // <ul>
                                              // <li></li></ul>
  
  //for every review, we need a li FOR every cast review
  
  for (let review of movies[movie].reviews) {
    const li = document.createElement('li')
    li.innerHTML = review.username + ": " + review.content 
    castUL.appendChild(li)
    
  }
  
  const reviewsDiv = document.getElementById("reviews")
  reviewsDiv.appendChild(castUL)
  
  
}

titanicButton.addEventListener("click", () => changeMovie("Titanic"))
terminatorButton.addEventListener("click", () => changeMovie("Terminator 2"))



  
});
