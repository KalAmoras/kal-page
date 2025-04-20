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
          <div className="item" id='inlockergif'>
              <div className="content">
                  <div className="name">InLocker</div>
                  <div className="des">{language===1? `A device protection app made with Kotlin for Android. Set passwords individually for your apps.` 
                                        : `App de proteção para dispositivos Android feito em Kotlin. Coloque senhas em apps individualmente.`}</div>
                  <a className='project-button' href= "https://github.com/KalAmoras/inlocker/tree/main" target="_blank" rel="noopener noreferrer">
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



// .project-section{
//   margin-top: clamp(16rem, 17rem + 10vh, 24rem);
//   margin-bottom: clamp(14rem, 14rem + 10vh, 20rem);
//  }

// .project-header{ 
//   font-size: clamp(2rem, 2vw + 2rem, 6rem);    
//   color: var(--dark-primary);     
//   text-align: center;
//   font-weight: 500;
//   margin-bottom: 6rem;  
//   scroll-margin-top: 2rem;    
// }

// .project-container{
//   margin-top: clamp(1rem, 1rem + 3vh, 2rem);
//   transform: translate(0%, 0%);
//   width: 1000px;
//   height: 600px;
//   align-self: center;
//   border-left: #f4a460;
//   border-radius: 30px;
// }

// .project-container .slide .item{
//   width: 200px;
//   height: 300px;
//   position: absolute;
//   top: 50%;
//   transform: translate(0, -50%);
//   border-radius: 20px;
//   box-shadow: 0 2px 1rem 2px #505050;
//   background-position: 50% 50%;
//   background-size: cover;
//   display: inline-block;
//   transition: 0.5s;
// }

// .slide .item:nth-child(1),
// .slide .item:nth-child(2){
//   top: 0;
//   left: 0;
//   transform: translate(0, 0);
//   border-radius: 0;
//   width: 60%;
//   height: 100%;
//   border-radius: 30px;
// }


// .slide .item:nth-child(3){
//   left: 63%;
// }
// .slide .item:nth-child(4){
//   left: calc(63% + 220px);
// }
// .slide .item:nth-child(5){
//   left: calc(63% + 440px);
// }

// .slide .item:nth-child(n + 6){
//   left: calc(63% + 660px);
//   opacity: 0;
// }  


// .item .content{
//   position: absolute;
//   top: 50%;
//   right: 1px;
//   width: 280px;
//   height: 320px;
//   text-align: left;
//   color: #eee;
//   transform: translate(0, -50%);
//   display: none;
//   background-color: #000;
//   border-radius: 20px;
//   padding: 2rem;
// }  

// .slide .item:nth-child(2) .content{
//   display: block;
// }
  
// .content .name{
//   font-size: 40px;
//   text-transform: uppercase;
//   font-weight: bold;
//   opacity: 0;
//   animation: animate 1s ease-in-out 1 forwards;
//   margin-top: 1rem;
// }

// .content .des{
//   margin-top: 10px;
//   opacity: 0;
//   animation: animate 1s ease-in-out 0.3s 1 forwards;
// }

// .content .project-button{
//   position: absolute;
//   bottom: 10px;
//   padding: 10px 20px;
//   border: none;
//   cursor: pointer;
//   opacity: 0;
//   animation: animate 1s ease-in-out 0.6s 1 forwards;
//   border-radius: 20px;
//   background-color:#f4a460;
//   color: black;
//   font-weight: 500;
//   text-decoration: none;
// }

// .content .project-button:hover{
//   box-shadow: 1px 1px 10px 1px #f4a460;
// }

// #buggif{
//   background-image: url('../assets/bugranger.gif');
//   background-size: contain;
//   background-repeat: no-repeat;
// }

// #routegif{
//   background-image: url('../assets/routetracker.gif');
//   background-repeat: no-repeat;
//   background-position: center;
// }

// #inlockergif{
//   background-image: url('../assets/inlocker.gif');
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size:auto;
//   background-color: #000;
// }
// #cookgif{
//   background-color: #000;
// }



// @keyframes animate {
//   from{
//       opacity: 0;
//       transform: translate(0, 100px);
//       filter: blur(33px);
//   }

//   to{
//       opacity: 1;
//       transform: translate(0);
//       filter: blur(0);
//   }
// }



// .button{
//   width: 100%;
//   text-align: center;
//   position: absolute;
//   bottom: 20px;
//   right: -230px;
// }

// .button button{
//   width: 80px;
//   height: 70px;
//   border: none;
//   cursor: pointer;
//   margin: 0 5px;
//   transition: 0.3s;
//   background-color: #f4a460;
//   color: #000;
//   font-size: 2rem;
// }

// .button button:nth-child(1){
//   border-radius: 50px 0px 0px 50px;
// }

// .button button:nth-child(2){
//     border-radius: 0px 50px 50px 0px;
// }

// .button button:hover{
//   background: #ababab;
//   color: #fff;
// }
