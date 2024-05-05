import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/requests'
import { useLocation, useNavigate } from 'react-router-dom'
import useDebounce from '../hooks/useDebounce'
const Search = () => {
  const nav = useNavigate()
  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  let query = useQuery()
  const searchTerm = query.get('q')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])
  
  const fetchSearchMovie = async (searchTerm) => {
    console.log(searchTerm)
    try {
      const request = await axios.get(
        `/search/multi?query=${searchTerm}`
        // `/search/multi?include_adult=false&query=${searchTerm}`
      )
      setSearchResult(request.data.results)
    } catch (error) {
      console.log('error', error)
    }
  }
  const goDetail = (movie) =>{
    nav(`/${movie.id}`, {state:{movie}})
  }

  const renderSearchResults = () => {
    return searchResult.length > 0 ? (
      <section className="search_container">
        {searchResult.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
            return (
              <div className={`movie ${movie.id}`} key={movie.id}>
                <div className="movie_column_poster" onClick={()=>goDetail(movie)}>
                  <img src={movieImageUrl} alt="" className="movie_poster" />
                </div>
              </div>
            )
          }
        })}
      </section>
    ) : (
      <section className="no_results">
        <div className="no_results_txt">
          <p>검색어 "{debouncedSearchTerm}" 에 대한 결과를 찾을 수 없습니다.</p>
          <p>Suggestion</p>
          <ul>
            <li>검색어의 철자를 정확히 입력했는지 확인하십시오.</li>
            <li>다른 검색어를 시도해 보십시오</li>
          </ul>
        </div>
      </section>
    )
  }
  return renderSearchResults()
}

export default Search
