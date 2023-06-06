import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { SiGooglemaps } from 'react-icons/si'
import { MdLocationOn } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigation = useNavigate();
    

  return (
    <footer className='footer'>
        <aside className='leftfooter'>
            <h1 className="footerh1">Évangélisation chrétienne</h1>
            <p className="footerdiv1" onClick={()=>window.location.replace(`https://www.google.com/maps/place/%C3%89glise+d'Identification+Chr%C3%A9tienne+de+Gatineau/@45.4677381,-75.7421527,17z/data=!4m6!3m5!1s0x4cce1db8d7274241:0x2747f95f23616f1b!8m2!3d45.4677381!4d-75.7421527!16s%2Fg%2F11sfwsshkx?authuser=1&entry=ttu`)}> <MdLocationOn size={30} color='white'/> 69 rue Jean-Proulx suite 202Gatineau, QCJ8Z 1W2</p>
            <div className="footerdiv2">
                <div className="footertext1">438-722-0169</div>
                <div className="footertext2">819-307-6812</div>
                <div className="footertext3">819-598-3226</div>
                <div className="footertext4">819-208-7395</div>
                <div className="footertext5">819-635-6259</div>
            </div>
        </aside>
        <aside className='centerfooter'>
            <h1>SUIVEZ-NOUS</h1>
            <div>
                <FaFacebook className="footericon" size={25} color='blue'/>
                <SiGooglemaps onClick={()=>{
                    window.location.replace(`https://www.google.com/maps/place/%C3%89glise+d'Identification+Chr%C3%A9tienne+de+Gatineau/@45.4677381,-75.7421527,17z/data=!4m6!3m5!1s0x4cce1db8d7274241:0x2747f95f23616f1b!8m2!3d45.4677381!4d-75.7421527!16s%2Fg%2F11sfwsshkx?authuser=1&entry=ttu`);
                  }} className="footericon" size={25} color='darkblue'/>
                <FaYoutube className="footericon" size={25} color='red'/>
            </div>
        </aside>
        <aside className='rightfooter'>
            <h1>À PROPOS</h1>
            <div className="footerdiv4">
                <div className="rightfootertext1" onClick={()=>navigation("/")}>Accueil</div>
                <div className="rightfootertext2">Politique de Confidentialité</div>
                <div className="rightfootertext3">Plan du Site</div>
                <div className="rightfootertext4" onClick={()=>navigation("/Contact")}>Nous Contacter</div>
            </div>
        </aside>
    </footer>
  )
}

export default Footer