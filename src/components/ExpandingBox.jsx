import './Desainer.css';
import react from '../assets/react-2.svg'
import javaScript from '../assets/javascript-1.svg'
import reactNative from '../assets/react-native-1.svg'
import node from '../assets/nodejs-icon.svg'
import android from '../assets/android.svg'

export const ExpandingBox = ({ boxId, onBoxOpen, isOpen, content, title }) => {

  const handleClick = () => {
    if (!isOpen) {
      onBoxOpen(boxId);
    }
  };
   
  const handleLogo = (handle) => {

    let pic
    if(boxId === 1 && handle === 1)pic = javaScript
    if(boxId === 1 && handle === 2)pic = react
    if(boxId === 1 && handle === 3)pic = node
    if(boxId === 2 && handle === 1) pic = react
    if(boxId === 3 && handle === 1) pic = reactNative
    if(boxId === 3 && handle === 2) pic = android 
    if(boxId === 4) {
     pic = javaScript
     }
    return pic
  }

  return (
    <>
      <div
        className={`project-box ${isOpen ? 'open' : ''}`}
        onClick={handleClick}
       >
        <div className='project-slide'>
          <div className='project-title'>{title}</div>
          <div className='project-text'>{content}</div>
          <img className='project-logo' src={handleLogo(1)} alt= ""></img>
          <img className='project-logo' src={handleLogo(2)} alt= ""></img>
          <img className='project-logo' src={handleLogo(3)} alt= ""></img>
          <a className={`project-button ${isOpen ? '' : 'disable'}`} href={boxId === 1 ? "https://kaltestes.github.io/bug-ranger-d/#/" : ""} target="_blank" rel="noopener noreferrer">Try it out!</a>
        </div>
      </div>
    </>
  );
};




// .project-section{
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   margin-top: clamp(16rem, 17rem + 10vh, 24rem);
//   align-items: center;  
//   width: 80%;
//  }
 
//  .project-header{ 
//    font-size: clamp(2rem, 2vw + 2rem, 6rem);    
//    color: var(--dark-primary);     
//    text-wrap:balance;
//    text-align: center;
//    font-weight: 500;
//    margin-top: 2rem;  
//    scroll-margin-top: 2rem;    
//  }
 
//  .project-wrapper{
//    margin-top: clamp(2rem, 2rem + 10vh, 8rem);
//    margin-bottom: clamp(2rem, 2rem + 10vh, 8rem);   
//    display: flex;
//    flex-direction: row;
//    gap: 1rem;
//    height: 420px;
//    width: 92.5%;
//    border-left: 2px solid sandybrown;
//    border-right: 2px solid sandybrown;
//    padding: 1rem;
//    overflow: visible;
//    align-items:center;
//    min-width: 17rem;
//    max-width: 62.5rem;
//    border-radius: 30px;
//    backdrop-filter: blur(2rem);
//    box-shadow: -15px 17px 17px rgba(10, 10, 10,0.1);
//    z-index: 300;
//  }
 

//  .project-box {
//    width: 5rem;
//    height: 420px;
//    background-color: bisque;
//    border-radius: 50px;
//    overflow: hidden;
//    background-repeat: no-repeat;
//    background-position: center center; 
//    background-size: cover;
//    flex-grow: 1;
//    flex-basis: fit-content;
//    z-index: 300;
//    display: grid;
//  }

//  .project-box.open {
//    width: 540px;
//    height: 420px;
//    flex-grow: 5;
//    background-color: bisque;
//    border-radius: 50px;
//    animation: text-hover paused;
//    z-index: 9;
//  }

//  .project-box:not(.open) {
//    flex-basis: auto; 
//    max-width: 100px;
//    min-width: 100px; 

//  }

 
//  .project-box.open > .project-slide{
//    display: grid;
//    justify-self: flex-end;
//    align-items: start;
//    justify-items: center;
//    color: var(--dark-primary);
//    text-align: start;  
//    backdrop-filter: blur(1rem);
//    box-shadow: -15px 17px 17px rgba(10, 10, 10,0.1);
//    background-color: var(--dark-bg);
//    text-wrap: wrap;
//    font-size: clamp(0.6rem, 0.3rem + 1vw, 1rem);
//    height: 100%;
//    width: 38%;
//    padding: 1rem;
//    overflow: hidden;
//    text-indent: 0.6rem;
//    user-select: none;
//    cursor:pointer;
//    z-index: 10;

//  }

//  .project-box.open > .project-text{
//    display: grid;
//    justify-self: flex-end;
//    align-items: start;
//    justify-items: center;
//    color: var(--dark-primary);
//    text-align: start;  
//  }

//  .project-title{
//    font-size: 1.5rem;
//    font-weight: 500;
//    margin-bottom: -1.6rem;
//  }

//  .project-text{
//    height: 5.4rem;
//    overflow: hidden;
//  }

 

//  .project-box.open > .project-slide:active{
//    animation: text-hover 1s ease-in-out 1 forwards;
//    animation-play-state: running;
//  }


//  @keyframes text-hover {
//    0%{
//      transform: translateX(0%);
//    }
   
//    100%{
//      transform: translateX(-130%);
//    }
//  }

//  .project-box:not(.open) > .project-title {
//    opacity: 0;
//    height: 0%;
//    width: 0%;
//  }

//  .project-box:not(.open) > .project-text {
//    opacity: 0;
//    user-select: none;
//  }

//  .project-box:not(.open) > .project-slide {
//    opacity: 0;
//    height: 0%;
//    width: 0%;
//  }

//  .project-box > .project-img {
//    width: 500px;
//    height: 410px;
//    object-fit: cover;
//    object-position: center center;
//  }   

//  .project-box:nth-child(1){
//    background-image: url('../assets/capivara.jpg');
//  }

//  .project-box.open:nth-child(1){
//    background-image: url('../assets/bugranger.gif');
//  }

//  .project-logo{
//    width: 30px;
//    height: auto;
//    margin-bottom: -2rem;
//    margin-top: -2rem;
//  }

//  .project-button{
//    display: grid;
//    width: 8rem;
//    height: 50%;
//    border-radius: 50px;
//    background-color: sandybrown;
//    margin-top: -1rem;
//    text-decoration: none;
//    align-content: center;
//    justify-content: center;
//    font-size: 0.9rem;
//    font-weight: 500;
//    color: var(--dark-bg);
//  }

//  .project-button.disable{
//    display: grid;
//    width: 0rem;
//    height: 0rem;
//    pointer-events: none;
//  }
  