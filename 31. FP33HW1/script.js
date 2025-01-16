const movies = [
  { id: 1, title: 'Movie 1', genre: 'action' },
  { id: 2, title: 'Movie 2', genre: 'drama' },
  { id: 3, title: 'Movie 3', genre: 'action' },
  { id: 4, title: 'Movie 4', genre: 'comedy' },
];

const movieListContainer = document.querySelector("#moviesList")
const genreGroupsElement = document.querySelector("#genreGroups")

const genreGroups = movies.reduce((acc, curr) => {
  
  const listItem = document.createElement("li")
  listItem.textContent = `${curr.title} - Genre: ${curr.genre}`
  movieListContainer.appendChild(listItem)

  if(!acc[curr.genre]){
    acc[curr.genre] = []
  }
  acc[curr.genre].push(curr.title)
  return acc
} , {})

const genreText = Object.keys(genreGroups).reduce((acc, curr) => {
  acc += `<div><strong>Genre:</strong> ${curr}\n</div>`
  acc += `<div><strong>Movies:</strong> ${genreGroups[curr].join(", ")}\n</div>`
  acc += `<hr>`
  return acc
} , "")

genreGroupsElement.innerHTML = genreText