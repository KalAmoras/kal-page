import React, { useEffect } from 'react'
import { useState } from 'react'
import circle from '../assets/circle.svg'
import cv from '../assets/cv.pdf'
import cv2 from '../assets/cv2.pdf'

const Resume = ({language}) => {

    const [cardId, setCardId] = useState(1)
    
    const resumePort = `Desenvolvedor JavaScript Fullstack,
                        Programador e Designer`
    
    const handleClick = (id) => {  
        let currentId = cardId
        setCardId(id)
    }

  return (
    <>
        {language===1?
        (
        <div className="resume-wrapper">
        <h1 className='resume-header' id='resume-header'>Resume</h1>         
            <div className="resume-box">
                <div className={`language ${cardId === 4 ? 'card-up' : ''}`}
                    onClick={()=>handleClick(4)}>
                    <div className="card-header" id="language-btn">Languages</div>
                    <div className="resume-content">
                        <ul className='list-title'>Portuguese
                            <li className='list-item'>Native</li>
                        </ul>
                        <ul className='list-title'>English
                            <li className='list-item'>Fluent</li>
                        </ul>  
                        <ul className='list-title'>Spanish
                            <li className='list-item'>Intermediate</li> 
                        </ul>
                    </div>
                </div>
                <div className={`experience ${cardId === 3 ? 'card-up' : ''}`}
                    onClick={()=>handleClick(3)}>
                    <div className="card-header" id="experience-btn"
                      style={{
                        top: `${cardId <= 3 ? '0' : '30' }rem`,
                        zIndex: `${cardId > 3 ? '105' : '102'}`,
                        borderTop:  `${cardId > 3 ? '0px solid sandybrown' : '1px solid sandybrown'}`,
                        borderBottom:  `${cardId > 3 ? '1px solid sandybrown' : '0px solid sandybrown'}`
                    }}>Previous Exp</div>
                    <div className="resume-content">
                    <ul className='list-title'>
                         <li className='list-date'>Jan 2013 - Dec 2015
                             <ul>
                                 <li className='list-item'>Dept Cult Dance Studio, São Paulo</li>
                                 <li className='list-item'>Administration, client service</li>
                             </ul>
                         </li>
                         <li className='list-date'>Mar 2018 - Nov 2018
                             <ul>
                                 <li className='list-item'>Escape Club, São Paulo</li>
                                 <li className='list-item'>Game master and client service</li>
                             </ul>
                         </li>
                         <li className='list-date'>Sep 2013 - Present
                             <ul>
                                 <li className='list-item'>Freelancing</li>
                                 <li className='list-item'>Graphic Designer</li>
                             </ul>
                         </li>           
                     </ul>
                    </div>
                </div>
                <div className={`certification ${cardId === 2 ? 'card-up' : ''}`}
                    onClick={()=>handleClick(2)}>
                    <div className="card-header" id="certification-btn"
                    style={{
                        top: `${cardId <= 2 ? '0' : '30' }rem`,
                        zIndex: `${cardId > 2 ? '104' : '103'}`,
                        borderTop:  `${cardId > 2 ? '0px solid sandybrown' : '1px solid sandybrown'}`,
                        borderBottom:  `${cardId > 2 ? '1px solid sandybrown' : '0px solid sandybrown'}`
                    }}>Certifications</div>
                    <div className='resume-content'>
                    <ul className='list-title'>
                        <li className='list-date'>Feb 2004 - Dec 2006
                            <ul>
                                <li className='list-item'>Highschool degree</li>
                                <li className='list-item'>FECAP Highschool, São Paulo</li>
                            </ul>
                        </li>
                        <li className='list-date'>Aug 2013 - Dec 2014
                            <ul>
                                <li className='list-item'>Graphic Design Tech degree</li>
                                <li className='list-item'>Escola Panamericana de Artes - EPA</li>
                            </ul>
                        </li>
                        <li className='list-date'>Fev 2021 - Sep 2023
                            <ul>
                                <li className='list-item'>System Analysis and Development Certification</li>
                                <li className='list-item'>Sistema Nacional de Aprendizagem - SENAI</li>
                            </ul>
                        </li>           
                    </ul>
                    </div>
                </div>
                <div className={`personal ${cardId === 1 ? 'card-up' : ''}`}
                    onClick={()=>handleClick(1)}>
                    <div className="card-header" id="personal-btn"
                    style={{
                        top: `${cardId === 1 ? '0' : '30' }rem`,
                        borderTop:  `${cardId ===1 ? '1px solid sandybrown' : '0px solid sandybrown'}`,
                        borderBottom:  `${cardId ===1 ? '0px solid sandybrown' : '1px solid sandybrown'}`                        
                    }}>Personal Info</div>
                    <div className="resume-content">
                        <ul className='list-title'>Cássio Jacques Santos Amoras
                            <li className='list-item-job'>Fullstack JavaScript Developer, Coder and Designer</li>
                            <li className='list-item'>Birthdate: 09/29/1988</li>
                            <li className='list-item'>Nationality: Brazil</li>
                            <li className='list-item'>Residency: São Paulo</li>
                            <li>
                                <a href={cv} id='download-link' download={cv}>Resume Download</a> 
                            </li>
                            <li>
                                <a href={cv2} id='download-link' download={cv2}>Certificates Download</a>                                   
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
        :
        (
            <div className="resume-wrapper">
                <h1 className='resume-header' id='resume-header'>Currículo</h1> 
            <div className="resume-box">
                <div className={`language ${cardId === 4 ? 'card-up' : ''}`}
                    onClick={()=>handleClick(4)}>
                    <div className="card-header" id="language-btn">Idiomas</div>
                    <div className="resume-content">
                        <ul className='list-title'>Português
                            <li className='list-item'>Nativo</li>
                        </ul>
                        <ul className='list-title'>Inglês
                            <li className='list-item'>Fluente</li>
                        </ul>  
                        <ul className='list-title'>Espanhol
                            <li className='list-item'>Intermediário</li> 
                        </ul>
                    </div>
                </div>
                <div className={`experience ${cardId === 3 ? 'card-up' : ''}`}
                    onClick={()=>handleClick(3)}>
                    <div className="card-header" id="experience-btn"
                      style={{
                        top: `${cardId <= 3 ? '0' : '30' }rem`,
                        zIndex: `${cardId > 3 ? '105' : '102'}`,
                        borderTop:  `${cardId > 3 ? '0px solid sandybrown' : '1px solid sandybrown'}`,
                        borderBottom:  `${cardId > 3 ? '1px solid sandybrown' : '0px solid sandybrown'}`
                    }}>Experiência Prévia</div>
                    <div className="resume-content">
                    <ul className='list-title'>
                         <li className='list-date'>Jan 2013 - Dez 2015
                             <ul>
                                 <li className='list-item'>Dept Cult Dance Studio, São Paulo</li>
                                 <li className='list-item'>Administração, atendimento</li>
                             </ul>
                         </li>
                         <li className='list-date'>Mar 2018 - Nov 2018
                             <ul>
                                 <li className='list-item'>Escape Club, São Paulo</li>
                                 <li className='list-item'>Mestre de jogos, atendimento</li>
                             </ul>
                         </li>
                         <li className='list-date'>Set 2013 - Presente
                             <ul>
                                 <li className='list-item'>Freelancing</li>
                                 <li className='list-item'>Design Gráfico</li>
                             </ul>
                         </li>           
                     </ul>
                    </div>
                </div>
                <div className={`certification ${cardId === 2 ? 'card-up' : ''}`}
                    onClick={()=>handleClick(2)}>
                    <div className="card-header" id="certification-btn"
                    style={{
                        top: `${cardId <= 2 ? '0' : '30' }rem`,
                        zIndex: `${cardId > 2 ? '104' : '103'}`,
                        borderTop:  `${cardId > 2 ? '0px solid sandybrown' : '1px solid sandybrown'}`,
                        borderBottom:  `${cardId > 2 ? '1px solid sandybrown' : '0px solid sandybrown'}`
                    }}>Certificados</div>
                    <div className='resume-content'>
                    <ul className='list-title'>
                        <li className='list-date'>Fev 2004 - Dez 2006
                            <ul>
                                <li className='list-item'>Ensino Médio</li>
                                <li className='list-item'>FECAP, São Paulo</li>
                            </ul>
                        </li>
                        <li className='list-date'>Ago 2013 - Dez 2014
                            <ul>
                                <li className='list-item'>Tecnólogo de Design Gráfico</li>
                                <li className='list-item'>Escola Panamericana de Artes - EPA</li>
                            </ul>
                        </li>
                        <li className='list-date'>Fev 2021 - Set 2023
                            <ul>
                                <li className='list-item'>Análise e Desenvolvimento de Sistemas</li>
                                <li className='list-item'>Sistema Nacional de Aprendizagem - SENAI</li>
                            </ul>
                        </li>           
                    </ul>
                    </div>
                </div>
                <div className={`personal ${cardId === 1 ? 'card-up' : ''}`}
                    onClick={()=>handleClick(1)}>
                    <div className="card-header" id="personal-btn"
                    style={{
                        top: `${cardId === 1 ? '0' : '30' }rem`,
                        borderTop:  `${cardId ===1 ? '1px solid sandybrown' : '0px solid sandybrown'}`,
                        borderBottom:  `${cardId ===1 ? '0px solid sandybrown' : '1px solid sandybrown'}`                        
                    }}>Info Pessoal</div>
                    <div className="resume-content">
                        <ul className='list-title'>Cássio Jacques Santos Amoras
                            {/* <li className='list-item-job'>Desenvolvedor JavaScript Fullstack</li>
                            <li className='list-item-job'>Programador e Designer</li> */}
                            <li className='list-item-job'>{resumePort}</li>
                           
                            <li className='list-item'>Data de nascimento: 29/09/1988</li>
                            <li className='list-item'>Nacionalidade: Brasil</li>
                            <li className='list-item'>Residência: São Paulo</li>
                            <li>
                                <a href={cv} id='download-link' download={cv} style={{visibility: `${cardId===1? 'visible': 'hidden'}`}}>Currículo para download</a>
                            </li>
                            <li>
                                <a href={cv2} id='download-link' download={cv2}  style={{visibility: `${cardId===1? 'visible': 'hidden'}`}}>Certificados para download</a>                   
                            </li>
                                   
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>
  )
}

export default Resume