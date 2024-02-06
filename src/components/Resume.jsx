import React, { useEffect } from 'react'
import { useState } from 'react'
import circle from '../assets/circle.svg'
import cv from '../assets/cv.pdf'

const Resume = ({language}) => {

    const [cardId, setCardId] = useState(1)
    
    
    
    const handleClick = (id) => {  
        let currentId = cardId
        setCardId(id)
        console.log(currentId)
        console.log(id)
    }

     {/* <div className="resume-button" onClick={()=>handleClick()} >
            <img id='resume-draw' src={circle}></img>
        </div> */}
        {/* <input type='checkbox' id='resume-button'></input> */}
    
    
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
                            <li className='list-item'>Fullstack JavaScript Developer, Coder and Designer</li>
                            <li className='list-item'>Birthdate: 09/29/1988</li>
                            <li className='list-item'>Nationality: Brazil</li>
                            <li className='list-item'>Residency: São Paulo</li>
                            <a href={cv} id='download-link' download={cv}>Resume Download</a>                                    
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
                    }}>Personal Info</div>
                    <div className="resume-content">
                        <ul className='list-title'>Cássio Jacques Santos Amoras
                            <li className='list-item'>Desenvolvedor JavaScript Fullstack, Programador e Designer</li>
                            <li className='list-item'>Data de nascimento: 29/09/1988</li>
                            <li className='list-item'>Nationality: Brazil</li>
                            <li className='list-item'>Residência: São Paulo</li>
                            <a href={cv} id='download-link' download={cv}>Currículo para download</a>                                    
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


 {/* <div className='resume-box'>
            <div className='resume'>
                <div className="resume-list">
                    <div className='list-title'>Certifications</div>
                    <div className='date-list'> Feb 2004 - Dec 2006
                        <div className='item-list'>
                        Highschool degree
                        <br/>
                        FECAP Highschool, São Paulo
                        </div>
                    </div>
                    <div className='date-list'> Aug 2013 - Dec 2014
                        <div className='item-list'>
                        Graphic Design Tech degree
                        <br/>
                        Escola Panamericana de Artes
                        </div>
                    </div>
                    <div className='date-list'> Fev 2021 - Sep 2023
                        <div className='item-list'>
                        System Analysis and Development Certification
                        <br/>
                        SENAI
                        </div>
                    </div>
                </div>
                <div className="resume-list">
                    <div className='list-title'>Previous Experience</div>
                    <div className='date-list'> Jan 2013 - Dec 2015
                        <div className='item-list'>
                            Dept Cult Dance Studio, São Paulo
                            <br/>
                            Administration and client service
                        </div>
                        </div>
                        <div className='date-list'>Mar 2018 - Nov 2018
                        <div className='item-list'>
                            Escape Club, São Paulo
                            <br/>
                            Game master and client service
                        </div>
                        </div>
                        <div className='date-list'>Sep 2013 - Present
                        <div className='item-list'>
                            Freelancing
                            <br/>
                            Graphic Designer
                        </div>
                    </div>
                </div>         
                <div className="resume-list">
                    <div className='list-title'>Languages</div>
                        <div className='language-item'>Portuguese     
                        <br/>
                        Native
                        </div>
                        <div className='language-item'>English 
                        <br/> 
                        Fluent
                        </div>
                        <div className='language-item'>Spanish 
                        <br/>
                        Intermediate
                        </div>
                </div>       
            </div>
        </div> */}


        // <div className="resume-wrapper">            
        //     <div className='resume-content'>
        //         <div className='resume'>
        //             <ul className='list-title'>Certifications
        //                 <li className='date-list'>Feb 2004 - Dec 2006
        //                     <ul>
        //                         <li className='item-list'>Highschool degree</li>
        //                         <li className='item-list'>FECAP Highschool, São Paulo</li>
        //                     </ul>
        //                 </li>
        //                 <li className='date-list'>Aug 2013 - Dec 2014
        //                     <ul>
        //                         <li className='item-list'>Graphic Design Tech degree</li>
        //                         <li className='item-list'>Escola Panamericana de Artes - EPA</li>
        //                     </ul>
        //                 </li>
        //                 <li className='date-list'>Fev 2021 - Sep 2023
        //                     <ul>
        //                         <li className='item-list' id='cert-special'>System Analysis and Development Certification</li>
        //                         <li className='item-list'>Sistema Nacional de Aprendizagem - SENAI</li>
        //                     </ul>
        //                 </li>           
        //             </ul>
        //             <ul className='list-title'>Previous Experience
        //                 <li className='date-list'>Jan 2013 - Dec 2015
        //                     <ul>
        //                         <li className='item-list'>Dept Cult Dance Studio, São Paulo</li>
        //                         <li className='item-list'>Administration, client service</li>
        //                     </ul>
        //                 </li>
        //                 <li className='date-list'>Mar 2018 - Nov 2018
        //                     <ul>
        //                         <li className='item-list'>Escape Club, São Paulo</li>
        //                         <li className='item-list'>Game master and client service</li>
        //                     </ul>
        //                 </li>
        //                 <li className='date-list'>Sep 2013 - Present
        //                     <ul>
        //                         <li className='item-list'>Freelancing</li>
        //                         <li className='item-list'>Graphic Designer</li>
        //                     </ul>
        //                 </li>           
        //             </ul>
        //             <ul className='list-title' id='language-list'>Languages
        //                 <li className='language-item'>Portuguese</li>
        //                 <li className='language-level'>Native</li>
        //                 <li className='language-item'>English</li>  
        //                 <li className='language-level'>Fluent</li>
        //                 <li className='language-item'>Spanish</li>
        //                 <li className='language-level'>Intermediate</li> 
        //             </ul>

        //         </div>
        //         <div className="personal">
        //             <ul className='list-title' id='personal-title'>Cássio Jacques Santos Amoras
        //                 <li className='item-list'>Fullstack JavaScript Developer, Coder and Designer</li>
        //                 <li className='item-list'>Birthdate: 29/09/1988</li>
        //                 <li className='item-list'>Nationality: Brazil</li>
        //                 <li className='item-list'>Residency: São Paulo</li>
        //                 <a href={cv} id='download-link' download={cv}>Resume Download</a>

                                  
        //             </ul>
        //         </div>
        //     </div>
        // </div>