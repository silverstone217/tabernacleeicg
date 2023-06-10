import React, { useEffect, useState} from 'react';
import Footer from './Footer';

const Contact = () => {

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
    <div className='contacts'>

      <section className='sectioncontacts1'>
        <h1>Évangélisation chrétienne</h1>
      </section>
      <section className='sectioncontacts2'>
        <h1>ÉGLISE CHRÉTIENNE – OTTAWA : CONTACT</h1>
        <p>Pour toute demande, veuillez nous contacter à l'aide du formulaire ci-dessous.</p>
      </section>
      <section className='sectioncontacts3'>
        <aside className='asidecontactform'>
          <h3>Contact</h3>
           <form>
              <div className='leftforminput'>
                <div>
                  <label htmlFor='Demande'>Demande</label>
                  <select name='Demande' id='Demande'>
                    <option value="Questions sur le service">Questions sur le service</option>
                    <option value="Appel d'offre">Appel d'offre</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='Name'>name*</label>
                  <input type='text' name='Name' id='Name' placeholder='Votre nom complet' required/>
                </div>
                <div>
                  <label htmlFor='email'>Adresse mail*</label>
                  <input type='email' name='email' id='email' placeholder='Votre adresse mail' required />
                </div>
              </div>

              <div className='rightforminput'>
                <div>
                  <label htmlFor='precision'>Precision</label>
                  <textarea name='precision' id='precision' placeholder='Precisez votre demande'/>
                </div>
                <div>
                  <label htmlFor='telephone'>Telephone*</label>
                  <input type='tel' name='telephone' id='telephone' placeholder='Votre numero de telephone' required/>
                </div>
                <div className='checkboxconf'>
                  <input type='checkbox' name='conf' id='conf' value='conf-checked'  required />
                  <label htmlFor='conf'>En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre strict de ma demande*</label>
                </div>
              </div>

           </form>
           <button>Envoyer</button>
        </aside>

        <aside>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.1025490028046!2d-75.74215269999999!3d45.4677381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce1db8d7274241%3A0x2747f95f23616f1b!2s%C3%89glise%20d&#39;Identification%20Chr%C3%A9tienne%20de%20Gatineau!5e0!3m2!1sfr!2sru!4v1686107227055!5m2!1sfr!2sru' width={screenSize.width > 768 ? "600" : "350"} height={screenSize.height > 768 ? "500" : "450"} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" aria-hidden="false" tabIndex="0" title='tabernacle'/>
        </aside>
      </section>

      <Footer/>

    </div>
  )
}

export default Contact