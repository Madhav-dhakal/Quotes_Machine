import React, { useState } from 'react';
import quotes from '../quotes';
import "./qm.css"

     const QuoteMachine = () => {
          const [quote, setQuote] = useState({});
          const [bgColor, setBgColor] = useState('#f8f8f8');
        
          const generateQuote = () => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex]);
            setBgColor(getRandomColor());
          };
        
          const getRandomColor = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          };
        
          return (
            <div className="quote-machine" style={{ backgroundColor:"violet" }}>
               <h1 className="title" style={{color:"white"}}>Quote Machine</h1>
              <div className="quote-container"style={{ backgroundColor: bgColor }}>
                <p className="quote-text" style={{ color: '#fff' }}>{quote.text}</p>
                <p className="quote-author" style={{ color: '#fff' }}>- {quote.author}</p>
              </div>
              <button className="generate-button" onClick={generateQuote}>Generate Quote</button>
            </div>
          );
        };
     
        
        export default QuoteMachine;