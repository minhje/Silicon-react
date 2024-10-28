import React, { useState } from 'react';

const Accordion = () => {
  // Använder useState för att hålla koll på vilken fråga som är öppen
  const [openIndex, setOpenIndex] = useState(null);

  // Exempeldata för FAQ
  const faqData = [
    {
      question: "Lagrar appen någon personlig information?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia iste cumque repellat est quasi aperiam ratione aut rem aliquid. Laborum!",
    },
    {
      question: "Hur säker är min data i appen?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus et expedita est, asperiores dolor ab iste provident earum recusandae nam.",
    },
    {
      question: "Vad händer om jag tar bort mitt konto?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia iste cumque repellat est quasi aperiam ratione aut rem aliquid. Laborum!",
    },
    {
        question: "Lagrar appen någon personlig information?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia iste cumque repellat est quasi aperiam ratione aut rem aliquid. Laborum!",
      },
      {
        question: "Hur säker är min data i appen?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus et expedita est, asperiores dolor ab iste provident earum recusandae nam.",
      },
      {
        question: "Vad händer om jag tar bort mitt konto?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia iste cumque repellat est quasi aperiam ratione aut rem aliquid. Laborum!",
      },
  ];

  // Funktion för att öppna och stänga FAQ-element
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {faqData.map((item, index) => (
        <div key={index} className={`faq-card ${openIndex === index ? 'open' : ''}`}>
          <div className="question" onClick={() => handleToggle(index)}>
            <p>{item.question}</p>
            <button className="btn-round">
              <i className={`fa-solid fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
            </button>
          </div>
          {openIndex === index && (
            <div className="answer">
              <div className="expandable">{item.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
