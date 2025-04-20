import React from 'react'

const Navbar = ({language}) => {

  let body = document.querySelector('html').getBoundingClientRect().top
 
  let about = document.querySelector('.about')
  let projects = document.querySelector(".project-header-two")
  let skills = document.querySelector(".skill-header")
  let resume = document.querySelector(".resume-header")
  let contact = document.querySelector(".contact-header")

  let aboutTop = about?.getBoundingClientRect().top - body  
  let projectsTop = projects?.getBoundingClientRect().top - body
  let skillsTop = skills?.getBoundingClientRect().top - body
  let resumeTop = resume?.getBoundingClientRect().top - body
  let contactTop = contact?.getBoundingClientRect().top - body   

  const viewport = window.matchMedia("(max-width: 1100px)")

  const portMatch = viewport.matches

  let aboutBounding = aboutTop + body -50 < 0 && projectsTop + body - 50 > 0
  let projectBounding = projectsTop + body - 50 < 0 && skillsTop + body -50 > 0
  let skillBounding = skillsTop + body - 50 < 0 && resumeTop + body - 50 > 0
  let resumeBounding = resumeTop + body - 50 < 0 && contactTop + body - 240 > 0
  let contactBounding = contactTop + body - 240 < 0


  const handleClick = (element) => {
    document.getElementById(element).scrollIntoView()
  }


  const style = {
    borderTop: '0px solid var(--dark-primary)',
    borderLeft:'1px solid var(--dark-primary)' ,
    borderBottom:'0px solid var(--dark-primary)' ,
    borderRight:'0px solid var(--dark-primary)' 
  };

  const stylePort = {
    borderTop: '0px solid var(--dark-primary)',
    borderLeft:'0px solid var(--dark-primary)' ,
    borderBottom:'1px solid var(--dark-primary)' ,
    borderRight:'0px solid var(--dark-primary)',
    // fontSize: `${language === 1 ? '0.66rem' : '0.65rem' }`,
    // paddingRight: `${language === 1 ? '0rem' : '0.6rem' }`,
  }


  const styleActive = {
    borderTop: '1px solid var(--dark-primary)',
    borderLeft:'0px solid var(--dark-primary)' ,
    borderBottom:'1px solid var(--dark-primary)' ,
    borderRight:'1px solid var(--dark-primary)',
    zIndex: '1006' 
  }

  const stylePortActive = {
    borderTop: '1px solid var(--dark-primary)',
    borderLeft:'1px solid var(--dark-primary)' ,
    borderBottom:'0px solid var(--dark-primary)' ,
    borderRight:'1px solid var(--dark-primary)',
    // fontSize: `${language === 1 ? '0.66rem' : '0.65rem' }`,
    // paddingRight: `${language === 1 ? '0rem' : '0.3rem' }`,
    zIndex: '1006' 
  }

  return (
    <>
      <div className='navbar' >
        <div className="nav-button" id="nav1" onClick={()=>handleClick('about')}           
            style={aboutBounding && portMatch ? stylePortActive 
              : aboutBounding && !portMatch ? styleActive
              : !aboutBounding && portMatch ? stylePort
              : style }    
        >{language===1? "About Me" : "Sobre mim"}</div>
        <div className="nav-button" id="nav2" onClick={()=>handleClick('project-header')}
            style={projectBounding && portMatch ? stylePortActive 
              : projectBounding && !portMatch ? styleActive
              : !projectBounding && portMatch ? stylePort
              : style }  
        >{language===1? "Projects" : "Projetos"}</div>
        <div className="nav-button" id="nav3" onClick={()=>handleClick('skill-header')}
            style={skillBounding && portMatch ? stylePortActive 
              : skillBounding && !portMatch ? styleActive
              : !skillBounding && portMatch ? stylePort
              : style }             
        >{language===1? "Skills" : "Habilidades"}</div>
        <div className="nav-button" id="nav4" onClick={()=>handleClick('resume-header')}
            style={resumeBounding && portMatch ? stylePortActive 
              : resumeBounding && !portMatch ? styleActive
              : !resumeBounding && portMatch ? stylePort
              : style }
        >{language===1? "Resume" : "Currículo"}</div>
        <div className="nav-button" id="nav5" onClick={()=>handleClick('contact-header')}
            style={contactBounding && portMatch ? stylePortActive 
              : contactBounding && !portMatch ? styleActive
              : !contactBounding && portMatch ? stylePort
              : style }
        >{language===1? "Contact" : "Contato"}</div>
      </div>
    </>
  )
}

export default Navbar