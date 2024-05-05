import './asset/scss/style.scss'
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Detail from './pages/Detail'
import Main from './pages/Main'
import Search from './pages/Search'

const Layout = () =>{
  console.log('test123')
  return(
    <div className='wrap'>
      <Nav/>
      <div className='content'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path=':movieId' element={<Detail/>}/>
          <Route path='search' element={<Search/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
