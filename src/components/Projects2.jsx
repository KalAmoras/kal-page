import React from 'react'
import './Desainer.css';
import javaScript from '../assets/javascript-1.svg'
import react from '../assets/react-2.svg'
import vite from '../assets/vitejs.svg'
import android from '../assets/android.svg'
import kotlin from '../assets/kotlin-1.svg'
import bugranger from '../assets/bugranger.gif'
import routetracker from '../assets/routetracker.gif'
import inlocker from '../assets/inlocker.gif'


// document.querySelectorAll('.project-content').forEach(card => {
//   const staticBg = card.dataset.static;
//   const gifBg = card.dataset.gif;

//   card.style.backgroundImage = `none`;

//   card.addEventListener('mouseenter', () => {
//     card.style.backgroundImage = `url(${gifBg})`;
//   });

//   card.addEventListener('mouseleave', () => {
//     card.style.backgroundImage = `none`;
//   });
// });

  const Projects2 = ({language}) => {
  return (
    <div className="project-section-two">
      <h1 className='project-header-two' id='project-header'>{language===1? `My Projects` : `Meus Projetos`}</h1>
      <div className="project-container-two">
        <div className="project-content" id="buggif" data-gif={bugranger}>
          <div className="project-text">
            <div className="project-name">Bug Ranger</div>
            <div className="project-des">
              {language===1? `A simple bug tracker made with React. Future iterations will feature back-end capabilties.` : `Bug tracker feito com React. Iterações futuras possuirão recursos back-end.`}
            </div>
          </div>
          <div className="logo-group">
            <img className='project-logo' src={javaScript} alt="" />
            <img className='project-logo' src={react} alt=""/>
            <img className='project-logo' src={vite} alt="" />
            <a className='project-button' href= "https://kaltestes.github.io/bug-ranger-d/#/" target="_blank" rel="noopener noreferrer">
                {language===1? `Try it out!` : `Experimente!`} 
            </a>
          </div>
        </div>
      <div className="project-content" id='routegif' data-gif={routetracker}>
        <div className="project-text">
          <div className="project-name">Route Tracker</div>
          <div className="project-des">
            {language===1? `A geolocation and route tracker made with React and Leaflet.` : `Rastreador de geolocalização e rotas feito com React e Leaflet.`}
          </div>
        </div>
        <div className="logo-group">
          <img className='project-logo' src={react} alt=""/>
          <a className='project-button' href= "https://routetracker.github.io/route-tracker/" target="_blank" rel="noopener noreferrer">
            {language===1? `Try it out!` : `Experimente!`} 
          </a>
        </div>
      </div>
      <div className="project-content" id='inlockergif' data-gif={inlocker}>
        <div className="project-text">
            <div className="project-name">InLocker</div>
            <div className="project-des">{language===1? `A device protection app made with Kotlin for Android. Set passwords individually for your apps.` 
                                  : `App de proteção para dispositivos Android feito em Kotlin. Coloque senhas em apps individualmente.`}</div>
        </div>
        <div className="logo-group">
          <img className='project-logo' src={android} alt=""/>
          <img className='project-logo' src={kotlin} alt=""/>
          <a className='project-button' href= "https://github.com/KalAmoras/inlocker/tags" target="_blank" rel="noopener noreferrer">
            {language===1? `Try it out!` : `Experimente!`} 
          </a>
        </div>      
      </div>
      <div className="project-content" id='overgif'>
        <div className="project-text">
            <div className="project-name">What's Cooking?</div>
            <div className="project-des">{language===1? `Work in progress` : `Em desenvolvimento`}</div>
        </div>
      </div>
      <div className="project-content" id='cookgif'>
        <div className="project-text">
            <div className="project-name">Overturner</div>
            <div className="des">{language===1? `Work in progress` : `Em desenvolvimento`}</div>
        </div>
      </div>
  </div>
</div>

  );
}

export default Projects2