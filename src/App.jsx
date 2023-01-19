import Posts from './components/Posts.jsx'
import { themeContext, themes } from './context/themeContext.jsx'
import { useState, useEffect } from 'react'
function App() {
  const [theme, setTheme] = useState(themes.light)
  const handleClick = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }
  const body = document.body
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove('bg-dark')
        body.classList.remove('text-light')
        body.classList.add('bg-light')
        body.classList.add('text-dark')
        console.log('Run light')
        break

      case themes.dark:
        body.classList.remove('bg-light')
        body.classList.remove('text-dark')
        body.classList.add('bg-dark')
        body.classList.add('text-light')
        console.log('Run dark')

        break

      default:
        body.classList.remove('bg-dark')
        body.classList.remove('text-light')
        body.classList.add('bg-light')
        body.classList.add('text-dark')
        console.log('Run default')
        break
    }
  }, [theme])

  return (
    <themeContext.Provider value={{ theme, handleClick }}>
      <div className='main-container'>
        <h1 className='text-center'>Light and Dark Theme</h1>
        <Posts />
      </div>
    </themeContext.Provider>
  )
}

export default App
