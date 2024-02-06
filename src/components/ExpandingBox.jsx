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
