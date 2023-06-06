import React, { useState, useEffect } from 'react';
import croix from '../images/croixIcon.png'
import { MdLocationOn } from 'react-icons/md';
import eagle from '../images/eagle.jpg';
import hands from '../images/holyhands.jpg';
import cross from '../images/cross.jpg';
import Footer from './Footer';



const listImages =[
    {
        id : 1,
        img: hands,
        txt:"Nous sommes à l’écoute pour mieux orienter les prières.",
        title:"Écoute",
    },
    {
        id : 2,
        img: eagle,
        txt:"Notre ministère a acquis une renommée mondiale grâce aux miracles survenus.",
        title:"Notoriété",
    },
    {
        id : 3,
        img: cross,
        txt:"Nous respectons les règles de distanciation sociale compte tenu de la situation actuelle",
        title:"Respect de la propreté",
    },
    
]

const Accueil = () => {

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
    <div className='accueil'>
        <section className='sectionaccueil'>

            <div className='sectionHeader'>
                <img loading='eager' onClick={()=>console.log(screenSize)} className="imgaccueil" src={croix} alt='logo' />
                <div className="accueilsectionText">Église D'Identification Chrétienne De Gatineau</div>
            </div>

            <div className='sectionBody'>
                <h1 className="accueilsectionText2">Évangélisation chrétienne</h1>
                <div className="accueilsectionText3"> <MdLocationOn size={30} color='white'/> 69 rue Jean-Proulx suite 202Gatineau, QCJ8Z 1W2</div>
                <div className="accueilsectionBody">
                    <div className="accueilsectionText4">438-722-0169</div>
                    <div className="accueilsectionText4">819-307-6812</div>
                    <div className="accueilsectionText4">819-598-3226</div>
                    <div className="accueilsectionText4">819-208-7395</div>
                    <div className="accueilsectionText4">819-635-6259</div>
                </div>
            </div>

        </section>

        <section className='sectionaccueilss2'>
            <div className="sectionaccueil1">
                <h1 className="accueilsectionTexts2">ÉGLISE CHRÉTIENNE À OTTAWA</h1>
                <h3 className="accueilsectionTexts3">Venez assister au culte organisé par l’Église d'Identification Chrétienne de Gatineau.</h3>
            </div>
            <div className="sectionaccueil2">
                <aside>
                    <h2 className="accueilsectionTexts4"> Qui sommes-nous ? </h2>
                    <p className="accueilsectionTexts3">Église d'identification chrétienne de Gatineau est une église interdenominationelle fondée sur le message du temps de la fin révélé par le prophète William Marrion Branham.</p>
                    <p className="accueilsectionTexts3" >Église d'identification chrétienne de Gatineau est une église interdenominationelle fondée sur le message du temps de la fin révélé par le prophète William Marrion Branham.
                        Situé au Canada plus précisement dans la région d'Ottawa/Gatineau, le Pasteur Abraham Tshitende prend fonction en 2004 et l'église compte environ une trentaine de membre et grandira avec le temps.</p>
                    <h2>Notre église chrétienne a vu le jour en 2004.</h2>
                </aside>
                <aside>
                <iframe loading='lazy' width={screenSize.height > 768 ? "600" : "360"} height={screenSize.height > 768 ? "500" : "400"} src="https://www.youtube.com/embed/fVc5xnXtJF4" title="Bienvenue à EICG ⛪️🙏🏾" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </aside>
            </div>
        </section>

        <section className='sectionaccueils2'>
            <div className="sectionaccueils1">
                <div>
                    <p className="accueilsectionText1" >ÉGLISE D'IDENTIFICATION CHRÉTIENNE DE GATINEAU</p>
                    <h3 className="accueilsectionTexts4">Découvrir nos atouts</h3>
                </div>

                <div className="sectionaccueils2s">
                    <h3 className="accueilsectionText3">MISSION ÉVANGÉLIQUE ET INTERDÉNOMINATIONNEL. DEMANDEZ PLUS DE DÉTAILS SUR NOTRE ÉGLISE !</h3>
                    <div className="sectionaccueilbtn">NOUS CONTACTER</div>
                </div>
            </div>
            <div className="sectionaccueils3" >
                {
                    listImages.map(item=>(
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.txt}</p>
                            <img  width={300} height={300} src={item.img} loading='lazy' alt='desc'/>
                        </div>
                    ))
                }
            </div>
        </section>
        <section className='section4'>
            <aside>
                <img src={croix} width={screenSize.height > 768 ? 700 : 300} height={screenSize.height > 768 ? 600 : 300} loading='lazy'   alt='logo'/>
            </aside>
            <aside className='section4Text' >
                <h1 className='section4Text1'>Notre église</h1>
                <h1>CHRÉTIENNE</h1>
                <p className='section4Text2'>Le fondement de notre église repose sur la foi en Jésus-Christ. Notre église est ouverte et accueille avec joie toute personne. Elle s’est progressivement développée grâce à des missions d’évangélisation dans les rues, les bureaux, les écoles, etc.</p>
                <p className='section4Text3'>Nous serions heureux de faire votre connaissance prochainement et espérons que ce site vous apportera toutes les informations nécessaires.</p>
                <p className='section4Text4'>Rendez-vous à Gatineau, à quelques minutes d’Ottawa et de Hull.</p>
                <h2>~Nous accueillons tous les peuples des nations.~</h2>
            </aside>
        </section>

        {
            screenSize.width > 768 && (<Footer/>)
        }
    </div>
  )
}

export default Accueil