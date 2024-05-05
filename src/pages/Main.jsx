import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from '../api/requests'
const Main = () => {
  return (
    <div>
      <Banner />
      <Row
        title="netflix originals"
        id="no"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending now"
        id="tn"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        id="tr"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action movie"
        id="am"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy movie"
        id="cm"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  )
}

export default Main