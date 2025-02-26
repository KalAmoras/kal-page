import React, { useEffect, useState, useRef } from 'react'
import './Desainer.css'
import Projects from './Projects';
import Splash from './Splash';
import Skills from './Skills';
import Navbar from './Navbar';
import Resume from './Resume';
import Contact from './Contact';
import brflag from '../assets/brflag.svg'
import usflag from '../assets/usflag.svg'

//TODO: Add InLocker gif to Projects, change Projects to Mondriani, correct navbar lines

const Desainer = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [language, setLanguage] = useState(1)
  const [openBoxId, setOpenBoxId] = useState(1)
  const [splashId, setSplashId] = useState(
    [
      `A designer immersed        
      in a world of code`,
      `A coder emerges
      to design the world`,
      `Um designer imerso
      em um mundo de código`,
      `Um programador emerge
      para desenhar o mundo`
  ])
  const projectRef = useRef(null);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
    document.documentElement.style.setProperty('--scroll-y', `${currentPosition}px`);
  };

  const handleLang = () => {
    if(language === 1) setLanguage(2)
    if(language === 2) setLanguage(1)
  }
   
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (projectRef.current && !projectRef.current.contains(e.target)) {
        setOpenBoxId(null);
      }
    };    
    document.addEventListener('click', handleClickOutside);   
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
     
  return (
    <>
    <Navbar
    language={language}/>
      <button id='flag' onClick={()=>handleLang()}>
        {language === 1 ? 
          (<img id='brflag' src={brflag} alt="" />)
          :
          (<img id='usflag' src={usflag} alt="" />)}
      </button>      
    { language === 1 ? (
    <div className="wrapper">
      <div className="header-one">
        <div className="static-header">Hi! My name is <strong id='name-str'> Cássio</strong> </div>          
        <div className="presentation"
          >,but you may call me</div>
        <div className="names">
          <div className="names-one"></div>
        </div>
      </div>
      
      <h1 className='about' id='about'>About Me</h1>
      <div className="photo"></div>
      <div className='intro-section'>
        <span className="description">
          <strong id='intro-str'>I'm a Fullstack JavaScript Developer, Coder and Designer</strong> from São Paulo, Brazil.
          <br/>
          <br/>
          Always looking for better, safer and cleaner ways to code, as well exploring interesting and curious designs and inspiring artistic concepts.
          <br/>
          <br/> 
          Currently searching for a JS-centered position, working with teams or freelancing, I'd like to develop and code for you.
        </span>
      </div>
     
      <Splash splashId={1}
        setSplashId={setSplashId}
        content={`${splashId[0]}`}
        language={language}
      />  

      <Projects language={language}/> 
      <Skills language={language}/>    
      <Resume language={language}/>

     
      <Splash splashId={2}
        setSplashId={setSplashId}
        content={`${splashId[1]}`}
        language={language}
      />  

      <Contact language={language}/>          

      <div className="circle"></div>    
     
        <svg>
            <defs>
            <filter id="turbulence">
              <feTurbulence type="turbulence" baseFrequency="0.01 0.05" numOctaves="2" result="NOISE"></feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="30">
              </feDisplacementMap>
            </filter>
            <filter id="turbulence2">
              <feTurbulence type="turbulence" baseFrequency="0.1 0.05" numOctaves="10"  seed="5" result="NOISE"></feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="30">
              </feDisplacementMap>
            </filter>
          </defs>
        </svg>
      </div>)
      :
      (<div className="wrapper">
      <div className="header-one">
           <div className="static-header">Olá! Meu nome é <strong id='name-str'> Cássio</strong> </div>          
           <div className="presentation">,mas você pode me chamar de</div>
           <div className="names">
            <div className="names-one"></div>
          </div>
        </div>
      
      <h1 className='about' id='about'>Sobre mim</h1>
      <div className="photo"></div>
      <div className='intro-section'>
        <span className="description">
          <strong id='intro-str'>Sou um Desenvolvedor JavaScript Fullstack, Programador e Designer</strong> de São Paulo, Brasil.
          <br/>
          <br/>
          Estou sempre buscando formas de programar mais eficientes, seguras e sucintas, assim como explorar interessantes e curiosos conceitos artísticos 
          <br/>
          <br/> 
          Atualmente procurando por uma posição voltada a JavaScript, trabalhando com equipes ou freelancing, eu gostaria de desenvolver e programar para você.
        </span>
      </div>    

      <Splash splashId={1}
        setSplashId={setSplashId}
        content={`${splashId[2]}`}
        language={language}
      />  
      <Projects language={language}/>
      <Skills language={language}/>     
      <Resume
      language={language}/>

      <Splash splashId={2}
        setSplashId={setSplashId}
        content={`${splashId[3]}`}
        language={language}
      />  

      <Contact language={language}/>          

      <div className="circle"></div>      
      <svg>
          <defs>
          <filter id="turbulence">
            <feTurbulence type="turbulence" baseFrequency="0.01 0.05" numOctaves="2" result="NOISE"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="30">
            </feDisplacementMap>
          </filter>
          <filter id="turbulence2">
            <feTurbulence type="turbulence" baseFrequency="0.1 0.05" numOctaves="10"  seed="5" result="NOISE"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="30">
            </feDisplacementMap>
          </filter>
         </defs>
      </svg>
      </div>)}
    </>

  );
};

export default Desainer;