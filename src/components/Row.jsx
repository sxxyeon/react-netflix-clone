import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/requests'
import Modal from './MovieModal/Modal'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Row = ({ title, fetchUrl, isLargeRow, id }) => {
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState({})

  let BASE_URL = "https://image.tmdb.org/t/p/original/"
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    //axios.get() 메서드는 HTTP GET 요청을 보내는 메서드로, 인자로는 요청을 보낼 URL을 받는다.
    const request = await axios.get(fetchUrl)
    setMovies(request.data.results)
  }
  const handleClick = (movie) =>{
    setModalOpen(true)
    setMovieSelected(movie)
  }
  //console.log(movieSelected)
  return (
    <section className="row">
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        //spaceBetween={50}
        breakpoints={{
          1378:{
            slidesPerView:6, // 한번에 보이는 슬라이드 갯수
            slidesPerGroup:6, // 몇개씩 슬라이드 할지
          },
          998:{
            slidesPerView: 5,
            slidesPerGroup:5
          },
          626:{
            slidesPerView: 4,
            slidesPerGroup:4
          },
          0:{
            slidesPerView:3,
            slidesPerGroup:3
          }
        }}
        navigation
        pagination={{clickable:true}}
        loop={true}
        //scrollbar={{draggable:true}}
      >
        <div id={id} className="poster_wrapper">
          {movies.map((movie) => (
            <SwiperSlide>
            <img
              onClick={()=>handleClick(movie)}
              key={movie.id}
              className={`poster_item ${isLargeRow && 'poster_item_large'}`}
              src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              loading="lazy"
              alt={movie.name}
            />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      {
        modalOpen && (
          <Modal {...movieSelected} setModalOpen={setModalOpen}/>
        )
      }
    </section>
  )
}

export default Row
