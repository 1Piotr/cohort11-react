import './App.css';
import Button from './components/Button'
import Article from './components/Article';
import Postcard from './components/Postcard';

import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode= () => {
        setDarkMode(!darkMode);
    };
  return (
    <div className={`App ${darkMode ? 'darkmode' : ''}`}>
      <div id="myButton">
      <Button
      bgColor="blue"
      textColor="white"
      bWidth="30px"
      borderR= "5px"
      onClick={toggleDarkMode}
      >
        My new button
      </Button>
      </div>
      <div className="Col1">
      <Postcard
        imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
        title="Beach"
        isDarkMode={darkMode}
      />
      <Postcard
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        title="Mountain"
        isDarkMode={darkMode}
      />
      <Postcard imageSrc="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Desert"
        isDarkMode={darkMode}
      />
    </div>
    <div className="Col2">
      <Article className="Kit" imageSrc="https://images.unsplash.com/photo-1501868984184-76121ed6a6e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        title="Travel Kit"
      />
    </div>
      
     
      
      
    </div>
  );
}

export default App;
