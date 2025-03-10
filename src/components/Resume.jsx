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

    useEffect(()=>{
        console.log(cardId)
    },[cardId])

return (
    <>
        <div className="resume-wrapper">
        <h1 className='resume-header' id='resume-header'>{language===1? 'Resume' : 'Currículo'}</h1>         
            <div className="resume-box">
                <div className={`language ${cardId === 4 ? 'card-up' : ''}`}
                    onClick={()=>handleClick(4)}>
                    <div className="card-header" id="language-btn">{language===1? 'Languages' : 'Idiomas'}</div>
                    <div className="resume-content">
                        <ul className='list-title'>{language===1? 'Portuguese' : 'Português'}
                            <li className='list-item'>{language===1? 'Native' : 'Nativo'}</li>
                        </ul>
                        <ul className='list-title'>{language===1? 'English' : 'Inglês'}
                            <li className='list-item'>{language===1? 'Fluent' : 'Fluente'}</li>
                        </ul>  
                        <ul className='list-title'>{language===1? 'Spanish' : 'Espanhol'}
                            <li className='list-item'>{language===1? 'Intermediate' : 'Intermediário'}</li> 
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
                    }}>{language===1? 'Previous Exp' : 'Experiência Prévia'}</div>
                    <div className="resume-content">
                    <ul className='list-title'>
                         <li className='list-date'>{language===1? 'Jan 2013 - Dec 2015' : 'Jan 2013 - Dez 2015'}
                             <ul>
                                 <li className='list-item'>Dept Cult Dance Studio, São Paulo</li>
                                 <li className='list-item'>{language===1? 'Administration, client service' : 'Administração, atendimento ao cliente'}</li>
                             </ul>
                         </li>
                         <li className='list-date'>Mar 2018 - Nov 2018
                             <ul>
                                 <li className='list-item'>Escape Club, São Paulo</li>
                                 <li className='list-item'>{language===1? 'Game master, designer and client service' : 'Game master, designer e atendimento ao cliente'}</li>
                             </ul>
                         </li>
                         <li className='list-date'>{language===1? 'Sep 2013 - Present' : 'Set 2013 - Presente'}
                             <ul>
                                 <li className='list-item'>Freelancing</li>
                                 <li className='list-item'>{language===1? 'Graphic Designer' : 'Designer Gráfico'}</li>
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
                    }}>{language===1? 'Certifications' : 'Certificações'}</div>
                    <div className='resume-content'>
                    <ul className='list-title'>
                        <li className='list-date'>{language===1? 'Feb 2004 - Dec 2006' : 'Fev 2004 - Dez 2006'}
                            <ul>
                                <li className='list-item'>{language===1? 'Highschool Degree' : 'Ensino Médio'}</li>
                                <li className='list-item'>{language===1? 'FECAP Highschool, São Paulo' : 'FECAP, São Paulo'}</li>
                            </ul>
                        </li>
                        <li className='list-date'>{language===1? 'Aug 2013 - Dec 2014' : 'Ago 2013 - Dez 2014'}
                            <ul>
                                <li className='list-item'>{language===1? 'Graphic Design Tech degree' : 'Tecnólogo em Design Gráfico'}</li>
                                <li className='list-item'>Escola Panamericana de Artes - EPA</li>
                            </ul>
                        </li>
                        <li className='list-date'>{language===1? 'Feb 2021 - Sep 2023' : 'Fev 2021 - Set 2023'}
                            <ul>
                                <li className='list-item'>{language===1? 'System Analysis and Development Certification' : 'Análise e Desenvolvimento de Sistemas'}</li>
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
                            <li className='list-item-job'>{language===1? 'Fullstack JavaScript Developer, Coder and Designer' : `${resumePort}`}</li>
                            <li className='list-item'>{language===1? 'Birthdate: 09/29/1988' : 'Data de nascimento: 29/09/1988'}</li>
                            <li className='list-item'>{language===1? 'Nationality: Brazil' : 'Nacionalidade: Brasil'}</li>
                            <li className='list-item'>{language===1? 'Residency: São Paulo' : 'Residência: São Paulo'}</li>
                            <li className='resume-download'   style={{visibility: `${cardId===1? 'visible': 'hidden'}`}}>
                                <a href={cv} id='download-link' download={cv}>{language===1? 'Resume Download' : 'Currículo para download'}</a> 
                            </li>
                            <li className='resume-download'   style={{visibility: `${cardId===1? 'visible': 'hidden'}`}}>
                                <a href={cv2} id='download-link' download={cv2}>{language===1? 'Certificates Download' : 'Certificados para download'}</a>                                   
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Resume