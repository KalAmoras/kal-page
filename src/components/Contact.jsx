import WhatsApp from '../assets/WhatsAppButtonGreenLarge.svg' 

const Contact = ({language}) => {
  

  return (
    <>
    <h1 className='contact-header' id='contact-header'>{language===1?'Contact' : 'Contato'}</h1>
    <div className='contact-section'>        
          <div className="contact-info-header">E-mail:
            <div className="contact-text">kalamorasarquivo@gmail.com</div>
          </div>
          <div className="contact-info-header">{language===1?'Phone:' : 'Fone:'}
           <div className="contact-text">+5511993909674</div>
          </div>
           <div className="contact-info-header">{language===1?'You can reach me at Whatsapp too:' : 'Você pode me encontrar no Whatsapp também:'}
          {/*to prevent tabnabbing on target="_blank, insert rel="noopener noreferrer"*/}
          </div>
          <a className='contact-button' href="https://wa.me/5511993909674" target="_blank" rel="noopener noreferrer">
            <img alt="Chat on WhatsApp" src={WhatsApp} />
          </a>
     </div>
    
    </>
  )
}

export default Contact