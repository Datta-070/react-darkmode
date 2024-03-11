import React, {useState} from 'react';
import './App.css';

function App() {
  const [isDarkMode, setDarkMode]=useState(false);
  const toggleTheme=()=>{
    setDarkMode(prevMode => !prevMode);
  };
  return (
    <div id='top' className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className={isDarkMode ? 'light-text' : 'dark-text'}>
        {isDarkMode ? 'This is Dark Mode' : 'This is Light Mode'}
      </h1>
      <button className='toggle-button' onClick={toggleTheme}>Cick here for {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
        </div>
  );
}

export default App;
