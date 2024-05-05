import axios from '../api/axios'
import requests from '../api/requests'
import React, { useEffect, useState } from 'react'
import BannerItem from './BannerItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components'

const Banner2 = () => {
  const [movieArray, setMovieArray] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying)
    const fetchedArray = request.data.results
    setMovieArray(fetchedArray)
  }

  const shuffle = (array) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5)
    return shuffledArray
  }

  const fetchMovieDetail = async (movieId) => {
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    })
    return movieDetail
  }

  return (
    <Swiper spaceBetween={50} slidesPerView={1} autoplay={true} className='swiper-container'>
      {shuffle(movieArray).map((movie,index) => (
        <SwiperSlide key={index} className='swiper-item'>
          <BannerItem movie={movie} fetchMovieDetail={fetchMovieDetail}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner2
