import React, { useEffect, useState } from 'react'

function LightButton() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  const toggleMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <button id="darkModeToggle" onClick={toggleMode}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  )
}

export default LightButton