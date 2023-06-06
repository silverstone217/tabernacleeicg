import React,{useEffect, useState} from 'react';
import './App.css';
import './pages/styles/styles.css';
import './pages/styles/plus.css';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import EnSavoirPlus from './pages/EnSavoirPlus';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NavBars from './pages/NavBars';
import croix from './images/croixIcon.png';
import FooterMinWidth from './pages/FooterMinWidth';




function App() {
  

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Ajoute un écouteur d'événement pour détecter les changements de taille de fenêtre
    window.addEventListener('resize', handleResize);

    // Retire l'écouteur d'événement lorsque le composant est démonté.
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        {
          parseInt(screenSize.width) > 768
          ?
          <NavBars/>
          :
          <div className='header'>
            <img src={croix} width={100} alt='logo' />
          </div>
        }
        <Routes>
          <Route path='/' element={<Accueil/>} />
          <Route path='Contact' element={<Contact/>} />
          <Route path='EnSavoirPlus' element={<EnSavoirPlus/>} />
        </Routes>
        {
          screenSize.width < 768 && (
            <FooterMinWidth/>
          )
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
