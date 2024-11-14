import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        const data = await res.json();
        setReviews(data);
      } 
      
      catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section id="testimonials">
      <div className="container">

        <div className="headline">
          <h2>Clients are Loving Our App</h2>
        </div>

        <div className="review"> 
          

          {reviews.map((item) => (
            <div key={item.id} className="card">
          
           <div className="quote-marks">
            <i className="fa-solid fa-quote-left"></i>
            </div>
            
            {/* Skrivet med hjälp av chatGPT */}
              <div className="starRating"> 
                {Array(item.starRating).fill().map((_, i) => (
                  <i key={`filled-${i}`} className="fa-solid fa-star"></i>
                ))}
                
                {Array(5 -item.starRating).fill().map((_, i) => (
                  <i key={`empty-${i}`} className="fa-regular fa-star"></i>))} 
              </div>
              <p>{item.comment}</p>

              <div className='author'>
              <img src={item.avatarUrl} alt={`${item.author} avatar`}/>

              <div className="name-role">
              <p className='name'>{item.author}</p>
              <p className='jobRole'>{item.jobRole}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
