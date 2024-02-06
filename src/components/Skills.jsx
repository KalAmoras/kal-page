import React, { useEffect, useRef, useState } from 'react'
import javaScript from '../assets/javascript-1.svg'
import react from '../assets/react-2.svg'
import node from '../assets/nodejs-icon.svg'
import next from '../assets/next-js.svg'
import vite from '../assets/vitejs.svg'
import html from '../assets/html-1.svg'
import css from '../assets/css-3.svg'
import java from '../assets/java-4.svg'
import spring from '../assets/spring-3.svg'
import jquery from '../assets/jquery-1.svg'
import dotnet from '../assets/dotnet.svg'
import csharp from '../assets/c--4.svg'
import mssql from '../assets/microsoft-sql-server-1.svg'
import mysql from '../assets/mysql-logo.svg'
import firebase from '../assets/firebase-1.svg'
import android from '../assets/android.svg'
import kotlin from '../assets/kotlin-1.svg'



const Skills = ({language}) => {
  const [openScreen, setOpenScreen] = useState(1);
  
  const handleButtonClick = (screenId) => {  
      setOpenScreen(screenId); 
  };
  
  return (
    <section className="skills-section">
    <h1 className='skill-header' id='skill-header'>
      {language===1? "My Skills" : "Minhas Habilidades"}     
    </h1>  
    <h2 className='skill-header2'>{language===1? "Most of which were used to create this page and the projects above" : "A maioria usada para criar esta página e os projetos acima"}</h2>       
    <div className='skill-box'>
      <div className="skill-buttons">    
        <button className= 'skill-button'
              id='javascript-button' 
              onClick={() => handleButtonClick(1)}
              style={{
                boxShadow: `${
                  openScreen === 1
                  ? '0rem 0rem 0.6rem 1px sandybrown'
                  : '0rem 0rem 0rem 0rem transparent'}` 
                  }}>
            <div className='square' id="jslogo">
              <img className='logo' src={javaScript} alt="" id="js-inside"/>
              <span className="logo-text">JavaScript</span>
            </div>
        </button>        
        <button className='skill-button'
            id='web-button' 
            onClick={() => handleButtonClick(2)}
            style={{
              boxShadow: `${
                openScreen === 2
                ? '0rem 0rem 0.6rem 1px sandybrown'
                : '0rem 0rem 0rem 0rem transparent'}` 
                }}>
          <div className='web-box'>
            <div className='square' id="htmllogo">
              <img className='logo' src={html} alt="" id='html-inside'/>
              <span className="logo-text">HTML</span>
            </div>
            <div className='square' id="csslogo">
              <img className='logo' src={css} alt="" id='css-inside'/>
              <span className="logo-text">CSS</span>
            </div>
          </div>
        </button>
        <button className='skill-button'
            id='sql-button' 
            onClick={() => handleButtonClick(3)}
            style={{
              boxShadow: `${
                openScreen === 3
                ? '0rem 0rem 0.6rem 1px sandybrown'
                : '0rem 0rem 0rem 0rem transparent'}` 
                }}>              
          <div className='sql-box'>
            <div className='square' id="msqllogo">
              <img className='logo' src={mssql} alt="" style={{backgroundColor: 'white', borderRadius: '10px'}}/>
              <span className="logo-text">SQL</span>
            </div>
          </div>
        </button>
        <button className='skill-button'
            id='java-button' 
            onClick={() => handleButtonClick(4)}
            style={{
              boxShadow: `${
                openScreen === 4
                ? '0rem 0rem 0.6rem 1px sandybrown'
                : '0rem 0rem 0rem 0rem transparent'}` 
                }}>
          <div className='java-box'>
            <div className='square' id="javalogo">
              <img className='logo' src={java} alt=""/>
              <span className="logo-text">Java</span>
            </div>
          </div> 
        </button>
        <button className='skill-button'
              id='dotnet-button'
              onClick={() => handleButtonClick(5)}
              style={{
                boxShadow: `${
                  openScreen === 5
                  ? '0rem 0rem 0.6rem 1px sandybrown'
                  : '0rem 0rem 0rem 0rem transparent'}` 
                  }}>
          <div className='dotnet-box'>
            <div className='square' id="dotnetlogo">
              <img className='logo' src={dotnet} alt="" style={{backgroundColor: 'white', borderRadius: '10px'}}/>
              <span className="logo-text">.Net</span>
            </div>
          </div>
        </button>
        
        <button className='skill-button'
            id='mobile-button' 
            onClick={() => handleButtonClick(6)}
            style={{
              boxShadow: `${
                openScreen === 6
                ? '0rem 0rem 0.6rem 1px sandybrown'
                : '0rem 0rem 0rem 0rem transparent'}` 
                }}>
            <div className='mobile-box'>
              <div className='square' id="androidlogo">
                <img className='logo' src={android} alt=""/>
                <span className="logo-text">Android</span>
              </div>
            </div>
        </button>
      </div>


      <div className='screen-box'>
        <div className={`screen ${openScreen===1? "open-screen" : ""}`}> 
          <div className='screen-logos'>
            <div className='square' id="jslogo">
              <img className='logo' src={javaScript} alt="" id="js-inside"/>
              <div className="logo-text">JavaScript</div>
            </div>
            <div className='square' id="reactlogo">
              <img className='logo' src={react} alt=""/>    
              <span className="logo-text">React</span>
            </div>
            <div className='square' id="nodelogo">
              <img className='logo' src={node} alt=""/>
              <span className="logo-text">Node</span>
            </div>
            <div className='square' id="nexxtlogo">              
              <img className='logo' src={next} alt="" style={{backgroundColor: 'white', borderRadius: '10px'}}/>          
              <span className="logo-text">Next</span>
            </div>
            <div className='square' id="vitelogo">
              <img className='logo' src={vite} alt=""/>
              <span className="logo-text">Vite</span>
            </div>
          </div>

          <div className='screen-interior'>
            <div className='skill-text'> {language===1? (`These are my bread and butter, my main tools for creating front and backend projects.
              React gives me all the control I need for my views while Next offers me more performance handling the processes on the backend.`) 
              : (`Estas são minhas principais ferramentas para projetos front-end e back-end.
              React me oferece o controle necessário para as minhas views enquanto Next oferece maior performance ao lidar com os processos no backend.`)}</div>
            <div className='skill-text'>{language===1? `Vite templates accelerates the processes cleaning up unnecessary clutter.` 
              : `Os templates do Vite aceleram o processo de criação reduzindo linhas excedentes`}</div>
          </div>  
        </div>

        <div className={`screen ${openScreen===2? "open-screen" : ""}`}>
          <div className='screen-logos'>
            <div className='square' id="htmllogo-two">
              <img className='logo' src={html} alt="" id='html-inside'/>
              <span className="logo-text">HTML</span>
            </div>
            <div className='square' id="csslogo">
              <img className='logo' src={css} alt="" id='css-inside'/>
              <span className="logo-text">CSS</span>
            </div>
          </div>
          <div className='screen-interior'>
            <div className='skill-text'>{language===1? `Every front-end tool I use, requires knowledge and familiarity with HTML and CSS.` 
              : `Todas as ferramentas de front-end que uso, requerem conhecimento e familiaridade com HTML e CSS.`}</div>
            <div className='skill-text'>{language===1? `Along with React or jQuery, I build and style pages with a wide variety of options. 
            DOM manipulation allows fast and succint page-creation.` 
              : `Junto com React ou jQuery, eu construo e estilizo páginas com uma vasta variedade de opções. 
              A manipulação do DOM permite rápida e sucinta criação de páginas.`}</div>  
          </div>
        </div>
        <div className={`screen ${openScreen===3? "open-screen" : ""}`}>
        <div className='screen-logos'>

          <div className='square' id="msqllogo">
            <img className='logo' src={mssql} alt="" style={{backgroundColor: 'white', borderRadius: '10px'}}/>
            <span className="logo-text">SQL</span>
          </div>
          <div className='square' id="mysqllogo">
            <img className='logo' src={mysql} alt=""/>
            <span className="logo-text">MySQL</span>
          </div>
          <div className='square' id="firebaselogo">
            <img className='logo' src={firebase} alt=""/>
            <span className="logo-text">Firebase</span>
          </div> 
          </div>

          <div className='screen-interior'>
          <div className='skill-text'>{language===1? `Whether I'm using MSSQL or MySQL, I'm able to create, maintain, transfer databases, and back them up.` 
              : `Seja utilizando MsSQL or MySQL, consigo criar, manter e transferir databases.`}</div>
          <div className='skill-text'>{language===1? `Through careful transaction management and efficient queries I can control the workflow to ensure no data is lost.` 
              : `Através do gerenciamento cuidadoso de transactions e buscas eficientes eu posso controlar o fluxo de trabalho para garantir que nenhum dado é perdido.`}</div>
          <div className='skill-text'>{language===1? `I've also have experience with Firebase buckets and cloud services.` 
              : `Também possuo experiência com buckets no Firebase e serviços de nuvem.`}</div>
        </div>

        </div>    
        <div className={`screen ${openScreen===4? "open-screen" : ""}`}>
          <div className='screen-logos'>
            <div className='square' id="javalogo">
              <img className='logo' src={java} alt=""/>
              <span className="logo-text">Java</span>
            </div>
            <div className='square' id="springlogo">
              <img className='logo' src={spring} alt=""/>
              <span className="logo-text">Spring</span>
            </div>
            <div className='square' id="jquerylogo">
              <img className='logo' src={jquery} alt="" style={{backgroundColor: 'white', borderRadius: '10px'}}/>
              <span className="logo-text">jQuery</span>
            </div>
          </div>
          <div className='screen-interior'>
            <div className='skill-text'>{language===1? `I've learned Java and built programs with its extensions for my certificated course. 
            Consistent practice gave me the capacity to troubleshoot and bug-test programs while I build them.` 
              : `Aprendi e programei em Java e suas extensões para o meu curso certificado. Prática consistente me deu a capacidade de debuggar enquanto realizo o projeto.`}</div>
            <div className='skill-text'>{language===1? `Spring initialization smoothes the steps needed to link back and front-end, automatically connecting to a SQL database.` 
              : `A inicialização em Spring alivia os passos necessários para o elo entre o back e front-end, automaticamente conectando a uma database SQL.`}</div>  
          </div>
        </div>    

        <div className={`screen ${openScreen===5? "open-screen" : ""}`}>
          <div className='screen-logos'>
            <div className='square' id="dotnetlogo">
              <img className='logo' src={dotnet} alt="" style={{backgroundColor: 'white', borderRadius: '10px'}}/>
              <span className="logo-text">.Net</span>
            </div>
            <div className='square' id="csharplogo"> 
              <img className='logo' src={csharp} alt=""/>
              <span className="logo-text">C#</span>
            </div>
          </div>
          <div className='screen-interior'>
            <div className='skill-text'>{language===1? `One of the first programming languages I've learned. 
            Using ASP.NET and Bootstrap I've coded a simple MVC with CRUD, and connected to SQL with migrations.` 
              : `Uma das primeiras linguagens de programação que aprendi. Usando ASP.NET e Bootstrap eu programei um MVC simples com CRUD e o conectei ao SQL através de migrations.`}</div>
            <div className='skill-text'></div>  
          </div>
        </div>
        <div className={`screen ${openScreen===6? "open-screen" : ""}`}>
          <div className='screen-logos'>
            <div className='square' id="androidlogo">
              <img className='logo' src={android} alt=""/>
              <span className="logo-text">Android</span>
            </div>
            <div className='square' id="kotlinlogo">
              <img className='logo' src={kotlin} alt=""/>
              <span className="logo-text">Kotlin</span>
            </div>
          </div>
          <div className='screen-interior'>
            <div className='skill-text'>{language===1? `Kotlin was the very first language I've learned building an BMI Calculator android app.` 
              : `Kotlin foi a primeira linguagem que aprendi construindo um aplicativo android Calculadora de IMC.`}</div>
            <div className='skill-text'></div>  
          </div>

          </div>
      </div>
    </div>
    </section>
  );
};  


export default Skills