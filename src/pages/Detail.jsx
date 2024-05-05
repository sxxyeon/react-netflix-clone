import axios from '../api/axios'
import requests from '../api/requests'
import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
const Detail = () => {
  const { state } = useLocation()
  const { movie } = state
  // const { movieId } = useParams()
  // const [movies, setMovies] = useState({})
  // useEffect(()=>{
  //   const fetchData = async() =>{
  //     const request = await axios.get(`/movie/${movieId}`)
  //     setMovies(request)

  //   }
  //   fetchData()

  // },[movieId])
  //console.log(movies)
  const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
  return (
    <div>
      <h1>{movie.title || movie.name}</h1>
      <img src={movieImageUrl} alt="" className="movie_poster" />
    </div>
  )
}

export default Detail
