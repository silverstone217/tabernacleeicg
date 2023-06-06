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
            <p className="footerdiv1"> <MdLocationOn size={30} color='white'/> 69 rue Jean-Proulx suite 202Gatineau, QCJ8Z 1W2</p>
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
                <SiGooglemaps className="footericon" size={25} color='darkblue'/>
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