import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../context/themeContext'

const Posts = () => {
  const { theme, handleClick } = useContext(themeContext)

  return (
    <div>
      <h4>My theme is {theme}</h4>
      <button
        className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`}
        onClick={handleClick}
      >
        {theme === 'dark' ? 'light' : 'dark'}
      </button>
    </div>
  )
}

export default Posts
