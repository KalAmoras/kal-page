import React, { useEffect, useState } from 'react'
import './Desainer.css';


const Splash = ({splashId, setSplashId, content, language}) => {  

  let body = document.querySelector('html').getBoundingClientRect().top
  
  let hidden = document.querySelector('.hidden')
  let hiddenReflect = document.querySelector('.hidden-reflect')
  
  let removeSplashOne = document.querySelector('#splash-text1')
  let removeReflectOne = document.querySelector('#reflection1')
  let splashTwo = document.querySelector('#splash-text2')
  let reflectTwo = document.querySelector('#reflection2')

  let splashOneCon = document.querySelector('.splash-container1')
  let splashTwoCon = document.querySelector('.splash-container2')

  let splashOneTop = splashOneCon?.getBoundingClientRect().top - body 
  let splashOneBot = splashOneCon?.getBoundingClientRect().bottom - body 
  let splashTwoTop = splashTwoCon?.getBoundingClientRect().top - body 
  let splashTwoBot = splashTwoCon?.getBoundingClientRect().bottom - body 

  let viewport = window.matchMedia("(max-width: 450px)")



  useEffect(()=>{
    if(splashOneTop + body -400 < 0 && splashOneBot + body > 0 ){
      hidden.classList.add('show')
      hiddenReflect.classList.add('show-reflect')
    }else{
      removeSplashOne?.classList.remove('show')
      removeReflectOne?.classList.remove('show-reflect')
    }


    if(splashTwoTop + body - 700 < 0 && splashTwoBot + body > 0){
      splashTwo.classList.add('show')
      reflectTwo.classList.add('show-reflect')
    }else{
      splashTwo?.classList.remove('show')
      reflectTwo?.classList.remove('show-reflect')
    }
  })

  
  return (
    <div className={`splash-container${splashId}`}>
      <div className={`splash${splashId}`}>
        <div className="hidden" id={`splash-text${splashId}`}
        style={{fontSize:`${language===2 && viewport.matches? `1.7rem` : `clamp(2rem, 9vw , 50px)`}`,
        height:`${language===2 ? `130px` : `110px`}`
        }}>
            {content}
        </div>
      </div>   
      <div className={`splash-reflect${splashId === 2? "2" : ""}`}      >
        <div className='hidden-reflect' id={`reflection${splashId}`} 
        style={{fontSize:`${language===2 && viewport.matches? `1.7rem` : `clamp(2rem, 9vw , 50px)`}`,
        height:`${language===2 ? `120px` : `90px`}`
        }}>
          {content}
        </div>
      </div>  
  </div>
  );
};

export default Splash
