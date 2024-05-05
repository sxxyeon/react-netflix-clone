import React, { useEffect, useState } from 'react'
import Logo from '../asset/img/h1-logo.png'
import User from '../asset/img/user-logged.png'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
  const [show, setShow] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const nav = useNavigate();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    nav(`/search?q=${e.target.value}`)
  }
  return (
    <nav className={`nav ${show && 'nav_black'}`}>
      <img
        src={Logo}
        alt="nav_logo"
        className="nav_logo"
        onClick={() => window.location.reload()}
      />
      <div className='right_nav'>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        className="nav_input"
        placeholder="검색어를 입력해주세요"
     />
      <Icon
        className="nav_avatar"
        icon="mdi:user-circle"
        width="40"
        color="red"
      />
      </div>
    </nav>
  )
}

export default Nav
