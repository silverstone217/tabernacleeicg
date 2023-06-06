import React, { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegEnvelope } from 'react-icons/fa'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { SiGooglemaps } from 'react-icons/si'
import { useNavigate } from 'react-router-dom';


const FooterMinWidth = () => {
    const navigation = useNavigate();

    const [open, setOpen ]= useState(false);

    function OpenMenu(){
        setOpen(!open);
    }

  return (
    <footer className={!open ? 'footer' : 'footerOpen'}>
              <div className='footerIcon'>
                <div className='footerIcon1'>
                  <div onClick={OpenMenu}>
                    <BiMenuAltLeft size={30} color='black'/>
                    <p>Menu</p>
                  </div>
                  <div>
                    <FaRegEnvelope size={30} color='black'/>
                    <p>Contact</p>
                  </div>
                  <div>
                    <CiLocationOn size={30} color='black'/>
                    <p>Plan</p>
                  </div>
                </div>
                <div className='footerIcon2'>Appel</div>
              </div>
              
              <div className='openfooterPlus'>
                {
                  open && (
                    <div className='footerOpenplus'>
                      <div onClick={()=>{
                        navigation("/");
                        setOpen(false);
                      }} className='footerOpenplusdiv1'>Accueil</div>
                      <div onClick={()=>{
                        navigation("/EnSavoirPlus");
                        setOpen(false);
                      }} className='footerOpenplusdiv1'>En Savoir Plus</div>
                      <div onClick={()=>{
                        navigation("/Contact");
                        setOpen(false)
                      }} className='footerOpenplusdiv1'>Nous Contacter</div>

                      <h1 >Église d'Identification Chrétienne de Gatineau</h1>
                      <p >69 rue Jean-Proulx suite 202Gatineau, QCJ8Z 1W2</p>
                      <div className='footerTel' >
                        <div >438-722-0169</div>
                        <div >819-307-6812</div>
                        <div >819-598-3226</div>
                        <div >819-208-7395</div>
                        <div >819-635-6259</div>
                      </div>
                      <div className='footerLogocontact'>
                        <FaFacebook className="footericon" size={25} color='blue'/>
                        <SiGooglemaps className="footericon" size={25} color='darkblue'/>
                        <FaYoutube className="footericon" size={25} color='red'/>
                      </div>
                    </div>
                  )
                }
              </div>
              
            </footer>
  )
}

export default FooterMinWidth