import React from 'react'
import Footer from './Footer';
import cross from '../images/cross 3.jpg';
import Christ from '../images/eagle3.jpg';
import pasteur from '../images/pasteur.jpeg';


const EnSavoirPlus = () => {
  return (
    <div className="plus">
      <section className='sectionPlus1'>
        <h1>Évangélisation chrétienne</h1>
      </section>
      <section className='sectionPlus2'>
        <h1>NOTRE ÉGLISE</h1>
        <div>
          <aside className='sectionPlus2aside1'>
            <div className='plusnumber'>
              <p>APPELEZ-NOUS POUR EN SAVOIR PLUS SUR NOTRE ÉGLISE.</p>
              <p>819-307-6812</p>
            </div>
            <p>Nous accomplissons une mission évangélique afin de partager la Parole de Dieu.</p>
            <div>
              <h2>NOS ACTIONS DURANT</h2>
              <h2>la mission évangélique</h2>
              <p>Dans le cadre d’une mission évangélique, nous avons pour rôle de faire connaître la Parole de Dieu dans la Bible. Nous traitons plusieurs thèmes pour que chacun puisse vivre pleinement l’évangélisation. Des réunions de couples sont programmées pour créer une bonne cohésion et renforcer les liens familiaux.</p>
              <p>Nous apprenons aux parents à placer le seigneur Jésus au centre du foyer afin de demeurer heureux et épanouis. Nous organisons également des camps de jeunes. Le but de cette rencontre est d’encadrer ces derniers pour qu’ils puissent recevoir le Saint-Esprit. </p>
              <h2>~Des réunions de couples et des camps de jeunes.~ </h2>
            </div>
          </aside>
          <aside>
            <img className='plusImg1' src={cross} loading='eager' alt='croix'/>
          </aside>
        </div>
      </section>
      <section className='sectionPlus3'>
        <aside>
            <h1>À PROPOS DE NOTRE ÉGLISE</h1>
            <p>Le fondement de l'église d’Identification Chrétienne de Gatineau est la foi chrétienne basée sur la Bible, qui est la Parole de Dieu. Nous n'admettons et n'adorons qu'un seul et unique Dieu : le Seigneur Jésus-Christ.</p>

            <p>La naissance du nom de l’église « Identification Chrétienne » est venue par une inspiration du Pasteur qui l’a ensuite soumise aux membres de l’église pour vote.</p>

            <p>L’église mise beaucoup sur la prière, le baptême du Saint-Esprit et les jeunes. Les réunions de prières visent à se rapprocher plus près du Seigneur et de consolider notre relation avec lui dans nos voies de tous les jours.</p>

            <p>Les réunions de jeunes dont l’objectif principal est la recherche du Saint-Esprit à travers un enseignement de la parole et un encadrement des jeunes.</p>

            <p>Nous avons foi sur l’avancement de l’église avec notre Seigneur Jésus-Christ.</p>
            <h2>Le message est fondé sur l’adoration de Jésus-Christ.</h2>
    
        </aside>

        <aside>
          <img src={Christ} alt='Christ' />
        </aside>
      </section>
      <section className='sectionPlus4'>
        <aside>
          <p>Venez découvrir Le Message à l’Église d'Identification Chrétienne de Gatineau.</p>
          <h1>QUE FAUT-IL SAVOIR SUR</h1>
          <h2>le Message ?</h2>
          <p>Le Message repose sur l’adoration de Jésus-Christ et la foi en Lui seul. Cette doctrine a été créée par William Marion Branham (communément appelé Frère Branham).</p>
          <p>Elle encourage les fidèles à faire confiance et à être fidèle à Dieu. Rendez-vous à Gatineau, à quelques kilomètres d’Ottawa et de Hull, pour assister à nos cultes évangéliques.</p>
        </aside>
        <aside>
          <img src={pasteur} loading='eager'  alt='croix'/>
          <h3>Pasteur Abraham Tshitende Tshibangu</h3>
        </aside>
      </section>
      <Footer/>
    </div>
  )
}

export default EnSavoirPlus