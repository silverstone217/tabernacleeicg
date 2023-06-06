import React from 'react';
import croix from '../images/croixIcon.png'
import './styles/styles.css';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBars = () => {
  const navigation = useNavigate()
  const location = useLocation();

  //console.log(location.pathname)
  return (
    <header className='header'>
      <div onClick={()=>navigation("/")} className='headerLeft'>
        <img className="imgIcon" src={croix} alt='logo' />
         <div className="headerText">Église D'Identification Chrétienne De Gatineau</div>
      </div>

      <div className='headerCenter'>               
          <div className={location.pathname === '/' ? "active" : "headerLink"} onClick={()=>navigation("/")} >ACCUEIL</div>
          <div className={location.pathname === '/EnSavoirPlus' ? "active" : "headerLink"}  onClick={()=>navigation("/EnSavoirPlus")}>EN SAVOIR PLUS</div>
          <div className={location.pathname === '/Contact' ? "active" : "headerLink"} onClick={()=>navigation("/Contact")}>NOUS CONTACTER</div>
      </div>

    </header>
  )
}

export default NavBars