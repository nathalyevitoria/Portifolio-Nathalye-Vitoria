import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verificar preferência salva no localStorage
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedMode === 'true' || (!savedMode && prefersDark);
    setIsDarkMode(shouldBeDark);
    
    if (shouldBeDark) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? 'Modo claro' : 'Modo escuro'}
      title={isDarkMode ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default DarkModeToggle;