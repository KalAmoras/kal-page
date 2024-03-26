import React, { useState, useEffect } from 'react';
import './Desainer.css';
import bugranger from '../assets/bugranger.gif'
import react from '../assets/react-2.svg'
import javaScript from '../assets/javascript-1.svg'
import reactNative from '../assets/react-native-1.svg'
import node from '../assets/nodejs-icon.svg'
import android from '../assets/android.svg'


const Projects = ({language}) => {

  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    const handleNextClick = () => {
      const items = document.querySelectorAll('.item');
      document.querySelector('.slide').appendChild(items[0]);
    };

    const handlePrevClick = () => {
      const items = document.querySelectorAll('.item');
      document.querySelector('.slide').prepend(items[items.length - 1]);
    };

    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    return () => {
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []);

 
  return (
    <div className="project-section">
    <h1 className='project-header' id='project-header'>{language===1? `My Projects` : `Meus Projetos`}</h1>

      <div className="project-container">
        <div className="slide">        
          <div className="item" id='overgif'>
              <div className="content">
                  <div className="name">What's Cooking?</div>
                  <div className="des">{language===1? `Work in progress` : `Em desenvolvimento`}</div>
                  <a className='project-button' href= "" target="_blank" rel="noopener noreferrer">
                    {language===1? `Try it out!` : `Experimente!`} 
                  </a>
              </div>
          </div>
          <div className="item" id='buggif'>
              <div className="content">
                  <div className="name">Bug Ranger</div>
                  <div className="des">
                    {language===1? `A simple bug tracker made with React. Future iterations will feature back-end capabilties.` : `Bug tracker feito com React. Iterações futuras possuirão recursos back-end.`}
                  </div>
                  <a className='project-button' href= "https://kaltestes.github.io/bug-ranger-d/#/" target="_blank" rel="noopener noreferrer">
                    {language===1? `Try it out!` : `Experimente!`} 
                  </a>
              </div>
          </div>
          <div className="item" id='routegif'>
              <div className="content">
                  <div className="name">Route Tracker</div>
                  <div className="des">
                    {language===1? `A geolocation and route tracker made with React and Leaflet.` : `Rastreador de geolocalização e rotas feito com React e Leaflet.`}
                  </div>
                  <a className='project-button' href= "https://routetracker.github.io/route-tracker/" target="_blank" rel="noopener noreferrer">
                    {language===1? `Try it out!` : `Experimente!`} 
                  </a>
              </div>
          </div>
          <div className="item" id='cookgif'>
              <div className="content">
                  <div className="name">Overturner</div>
                  <div className="des">{language===1? `Work in progress` : `Em desenvolvimento`}</div>
                  <a className='project-button' href= "" target="_blank" rel="noopener noreferrer">
                    {language===1? `Try it out!` : `Experimente!`} 
                  </a>
              </div>
          </div>
      </div>

      <div className="button">
            <button className="prev">&#10094;</button>
            <button className="next">&#10095;</button>
      </div>
      </div>

    </div>

  );
};

export default Projects;






// const [currentIndex, setCurrentIndex] = useState(0);
// const numCards = 4; 
// const visibleCards = 3; 

// const nextCard = () => {
//   setCurrentIndex((prevIndex) => (prevIndex === numCards - 1 ? 0 : prevIndex + 1));
// };

// const prevCard = () => {
//   setCurrentIndex((prevIndex) => (prevIndex === 0 ? numCards - 1 : prevIndex - 1));
// };

// return (
//   <div className="project-section">
    // <h1 className='project-header' id='project-header'>My Projects</h1>

//     <div className="project-wrapper">
//       <div className='project-active'>
//         <p>TEST</p>
//       </div>
//       <div className="project-box">
//         <div className="project-slider" style={{ width: `${visibleCards * 220}px` }}>
//           {Array.from({ length: visibleCards * 2 }).map((_, index) => {
//             const cardIndex = (currentIndex + index) % numCards;
//             return (
//               <div key={index} className="project-card">
//                 Card {cardIndex + 1}
//               </div>
//             );
//           })}
//         </div>
//         <button className="prev" onClick={prevCard}>&#10094;</button>
//         <button className="next" onClick={nextCard}>&#10095;</button>
//       </div>
//     </div>
//   </div>
// );
// };