import React, { useState, useEffect } from 'react';

// Kod generarad av chatGPT.
const Accordion = () => {
  const [faqs, setFaqs] = useState([]);          // Lagrar FAQ-data från API
  const [openIndex, setOpenIndex] = useState(null); // Lagrar öppen fråga

  useEffect(() => {
    // Hämtar FAQ-data från API
    const fetchFAQs = async () => {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq'); // API-url
      const data = await response.json();
      setFaqs(data); // Spara API-datan i state
    };

    fetchFAQs();
  }, []);

  // Funktion för att öppna/stänga FAQ-kort
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <div key={item.id} className={`faq-card ${openIndex === index ? 'open' : ''}`}>
         
          <div className="title" onClick={() => handleToggle(index)}>
            <p>{item.title}</p>  {/* Hämtar title från API */}
            <button className="btn-round" aria-label="Button to open answer">
              <i className={`fa-solid fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
            </button>
          </div>

          {openIndex === index && (
            <div className="content">
              <div className="expandable">{item.content}</div> {/* Hämtar content från API */}
            </div>
          )}

        </div>
      ))}
      
    </div>
  );
};

export default Accordion;
