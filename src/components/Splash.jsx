import React, { useEffect, useRef } from 'react';
import './Desainer.css';

const Splash = ({ splashId, content, language }) => {
  const splashTextRef = useRef(null);
  const reflectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 200 && rect.bottom > 0;

      if (splashTextRef.current && reflectionRef.current) {
        if (isVisible) {
          splashTextRef.current.classList.add('show');
          reflectionRef.current.classList.add('show-reflect');
        } else {
          splashTextRef.current.classList.remove('show');
          reflectionRef.current.classList.remove('show-reflect');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`splash-container${splashId}`}>
      <div className={`splash${splashId}`}>
        <div ref={splashTextRef} className="hidden" id={`splash-text${splashId}`}>
          {content}
        </div>
      </div>
      <div className={`splash-reflect${splashId === 2 ? "2" : ""}`}>
        <div ref={reflectionRef} className="hidden-reflect" id={`reflection${splashId}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Splash;
