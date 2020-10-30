import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieForm from './MovieForm'


const App = () => {
  const [movies, setMovies] = useState([])
  const [searchState, setSearchState] = useState('')
  const [movieList, setMovieList] = useState([])
  
  useEffect(() => {
    axios
      .get('https://mcuapi.herokuapp.com/api/v1/movies')
      .then(response => {
        setMovies(response.data.data)
        setMovieList(response.data.data)
      })
  }, [])

  const handleSearchChange = (e) => {
    setSearchState(e.target.value)
    
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setMovieList(movies.filter(movie => movie.release_date.startsWith(searchState)))
    setSearchState('')
  }

  return(
    <div>
      <div id='header'>
        <h1 id='title'>MCU movies</h1>
        <form id='search'>
          <h2>Search movies by year:</h2>
          <input type="text" onChange={handleSearchChange} value={searchState}/><br/>
          <span>Add a search argument</span> <br/>
          <button onClick={handleSearch}>Search</button>
        </form>
      </div>
      {movieList.length === 0 ? 
        <p id='nomovies'>No movies found from that year</p> :
        <div id='moviesListed'>
          {movieList.map(movie =>
            <MovieForm key={movie.id} movie={movie}/>  
          )}
        </div>
      }
    </div>
  )
}

export default App;

// api address https://mcuapi.herokuapp.com/api/v1/movies