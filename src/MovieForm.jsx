/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const MovieForm = ({ movie }) => {
  const [showFullInfo, setShowFullInfo] = useState(false)

  const movieStyle = {
    border: 'solid green 5px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '15px',
    backgroundColor: 'ivory',
    textAlign: 'center'
  }
    
  if (showFullInfo) {
    return (
      <div id='movies' style={movieStyle}>
        {movie.title} <br/>
        Directed by {movie.directed_by} <br/>
        Part of phase {movie.phase} <br/>
        Released on {movie.release_date.slice(8,10)}.
        {movie.release_date.slice(5,7)}.
        {movie.release_date.slice(0,4)} <br/>
        <img src={movie.cover_url} alt="movie cover"/> <br/>
        Overview: {movie.overview} <br/>
        <button onClick={() => setShowFullInfo(false)}>Show less</button>
      </div>
    )
  }
  return (
    <div id='movies' style={movieStyle}>
      {movie.title} <br/>
      <img src={movie.cover_url} alt="movie cover" height='200px'/> <br/>
      <button onClick={() => setShowFullInfo(true)}>Show more</button>
    </div>
  )
}

export default MovieForm