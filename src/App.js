import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieForm from './MovieForm'


const App = () => {
  const [movies, setMovies] = useState([])
  const [searchState, setSearchState] = useState('')
  const [movieList, setMovieList] = useState([])
  const [message, setMessage] = useState('Add a search argument')
  
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
    
    if (searchState === '') {
      setMessage('Add a search argument')
    }
    setSearchState('')
  }

  return(
    <div>
      <div id='header'>
        <h1 id='title'>List of MCU movies</h1>
        <form id='search'>
          <h2>Search movies by year:</h2>
          <input type="text" onChange={handleSearchChange} value={searchState}/><br/>
          {message} <br/>
          <button onClick={handleSearch}>Search</button>
        </form>
      </div>
      {movieList.length === 0 ? 
        <p>No movies found</p> :
        <div id='moviesListed'>
          {movieList.map(movie =>
            <MovieForm key={movie.id} movie={movie} message={message} />  
          )}
        </div>
      }
    </div>
  )
}

export default App;

// api address https://mcuapi.herokuapp.com/api/v1/movies